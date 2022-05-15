<?php

namespace App\Http\Requests;

use App\Models\Package;
use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest
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
        $package = Package::find($this->input('package_id'));
        $min_quantity = $package->min_quantity ?? 0;
        $max_quantity = $package->max_quantity ?? 0;

        return [
            'input' => 'required|string|max:200',
            'package_id' => 'required|exists:packages,id',
            'quantity' => 'required|integer|min:' . $min_quantity . '|max:' . $max_quantity,
            'note' => 'nullable|string|max:500',
        ];
    }
}
