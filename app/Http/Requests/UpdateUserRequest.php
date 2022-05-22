<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
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
            'name' => 'required|string|min:3|max:100',
            'email' => 'required|email|unique:users,email,' . $this->user->id,
            'phone' => 'required|numeric|starts_with:0|digits:10,unique:users,phone,' . $this->user->id,
            'role' => [
                'required',
                Rule::in([User::MEMBER, User::ADMIN]),
            ]
        ];
    }
}
