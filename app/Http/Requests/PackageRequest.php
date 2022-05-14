<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PackageRequest extends FormRequest
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
            'service_id' => 'required|exists:services,id',
            'name' => 'required|string|max:200',
            'price' => 'required|numeric|min:0|max:100000000',
            'min_quantity' => 'required|numeric|min:1|max:100000000',
            'max_quantity' => 'required|numeric|gt:min_quantity|max:100000000',
            'note' => 'nullable|string|max:1000',
        ];
    }
}
