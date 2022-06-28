<?php

namespace App\Http\Requests;

use App\Models\Category;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CategoryRequest extends FormRequest
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
            'type' => [
                'required',
                Rule::in([Category::SERVICE_TYPE, Category::TICKET_TYPE]),
            ],
            'icon' => 'nullable|string|min:4|max:50',
            'name' => 'required|string|min:3|max:50|unique:categories,name,'.optional($this->category)->id,
            'status' => [
                'nullable',
                Rule::in([Category::ACTIVE, Category::INACTIVE]),
            ],
        ];
    }
}
