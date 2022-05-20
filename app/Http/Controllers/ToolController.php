<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ToolController extends Controller
{
    public function getFacebookId()
    {
        return view('tools.get-facebook-id');
    }

    public function postFacebookId(Request $request)
    {
        $request->validate([
            'url_facebook' => 'required|url',
        ]);

        $response = Http::withHeaders([
            'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36',
        ])
            ->asForm()
            ->post('https://findidfb.com', [
                'url_facebook' => $request->url_facebook,
            ]);

        $body = $response->body();
        preg_match('/Numeric ID: <b>(.*?)<\/b>/', $body, $matches);

        return back()
            ->with('success', 'Lấy ID Facebook thành công')
            ->with('facebook_id', $matches ? $matches[1] : 'Không lấy được ID Facebook');
    }
}
