<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;

class SetConfig
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return Response|RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        Config::set('services.telegram-bot-api.token', setting('telegram_token'));
        Config::set('mail.default', setting('mail_mailer'));
        Config::set('mail.mailers.smtp.host', setting('mail_host'));
        Config::set('mail.mailers.smtp.port', setting('mail_port'));
        Config::set('mail.mailers.smtp.username', setting('mail_username'));
        Config::set('mail.mailers.smtp.password', setting('mail_password'));
        Config::set('mail.mailers.smtp.encryption', setting('mail_encryption'));
        Config::set('mail.from.address', setting('mail_from_address'));

        return $next($request);
    }
}
