<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DepositRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'telco' => 'required|string',
            'amount' => 'required|numeric|in:10000,20000,50000,100000,200000,500000',
            'serial' => 'required|string|min:8|max:15',
            'pin' => 'required|string|min:8|max:15',
        ];
    }
}
