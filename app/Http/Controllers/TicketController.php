<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTicketRequest;
use App\Models\Category;
use App\Models\Ticket;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{
    public function index()
    {
        return view('tickets.index');
    }

    public function create()
    {
        $categories = Category::query()
            ->where('type', Category::TICKET_TYPE)
            ->active()
            ->get();

        return view('tickets.create', compact('categories'));
    }

    public function store(CreateTicketRequest $request)
    {
        $ticket = Ticket::create([
            'user_id' => Auth::id(),
            'category_id' => $request->get('category_id'),
            'title' => $request->get('title'),
            'content' => $request->get('content'),
            'priority' => $request->get('priority'),
            'status' => Ticket::STATUS_OPEN,
        ]);

        return to_route('ticket.show', $ticket)->with('success', 'Gửi yêu cầu hỗ trợ thành công');
    }

    public function show(Ticket $ticket)
    {
        $ticket->where('user_id', Auth::id());

        return view('tickets.show', compact('ticket'));
    }
}
