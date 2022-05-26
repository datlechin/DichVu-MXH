<?php

namespace App\Http\Requests;

use App\Models\Category;
use App\Models\Ticket;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateTicketRequest extends FormRequest
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
            'category_id' => [
                'nullable',
                Rule::exists('categories', 'id')->where(function ($query) {
                    $query->where('type', Category::TICKET_TYPE);
                }),
            ],
            'priority' => [
                'required',
                Rule::in([Ticket::PRIORITY_LOW, Ticket::PRIORITY_MEDIUM, Ticket::PRIORITY_HIGH]),
            ],
            'title' => 'required|string|min:5,max:255',
            'content' => 'required|string|min:10'
        ];
    }
}
