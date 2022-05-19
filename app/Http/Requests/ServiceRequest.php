<?php

namespace App\Http\Requests;

use App\Models\Service;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ServiceRequest extends FormRequest
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
            'category_id' => 'required|exists:categories,id',
            'name' => [
                'required', 'string', 'min:3', 'max:50',
                Rule::unique('services')->where(function ($query) {
                    return $query->where('category_id', $this->category_id);
                })->ignore($this->service),
            ],
            'label' => 'required|string|min:3|max:50',
            'placeholder' => 'nullable|string|max:100',
            'description' => 'nullable|string|min:10',
            'status' => [
                'nullable',
                Rule::in([Service::ACTIVE, Service::INACTIVE]),
            ]
        ];
    }
}
