<?php

namespace App;

use Illuminate\Support\Facades\Http;
use voku\helper\HtmlDomParser;

class Deposit
{
    private $cookie;

    private $dom;

    public array $transactions;

    public function __construct()
    {
        $this->cookie = setting('tsr_cookie');

        $this->doTransactionRequest();
    }

    private function doTransactionRequest()
    {
        $response = Http::withHeaders([
            'Cookie' => $this->cookie,
        ])
            ->get('https://thesieure.com/wallet/history/vnd');

        $this->dom = HtmlDomParser::str_get_html($response->body());

        $data = collect();

        foreach ($this->dom->find('table tbody tr') as $item) {
            $id = $item->find('td:nth-child(1)', 0)->plaintext;
            $amount = $item->find('td:nth-child(3)', 0)->plaintext;
            $date = $item->find('td:nth-child(6)', 0)->plaintext;
            $description = $item->find('td:nth-child(7)', 0)->plaintext;
            $amount = preg_replace('/\D/', '', $amount);

            $data->push([
                'id' => $id,
                'amount' => $amount,
                'date' => $date,
                'description' => $description,
            ]);
        }

        $this->transactions = $data->toArray();
    }

    public function transactions()
    {
        return $this->transactions;
    }

    public function findTransaction($id, $amount, $description)
    {
        foreach ($this->transactions as $transaction) {
            if ($transaction['id'] == $id && $transaction['amount'] == $amount && $transaction['description'] == $description) {
                return (object) $transaction;
            }
        }

        return null;
    }
}
