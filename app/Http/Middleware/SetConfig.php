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
        Config::set('services.telegram-bot-api.token', setting('telegram_token', env('TELEGRAM_BOT_TOKEN')));
        Config::set('mail.default', setting('mail_mailer', env('MAIL_MAILER')));
        Config::set('mail.mailers.smtp.host', setting('mail_host', env('MAIL_HOST')));
        Config::set('mail.mailers.smtp.port', setting('mail_port', env('MAIL_PORT')));
        Config::set('mail.mailers.smtp.username', setting('mail_username', env('MAIL_USERNAME')));
        Config::set('mail.mailers.smtp.password', setting('mail_password', env('MAIL_PASSWORD')));
        Config::set('mail.mailers.smtp.encryption', setting('mail_encryption', env('MAIL_ENCRYPTION')));
        Config::set('mail.from.address', setting('mail_from_address', env('MAIL_FROM_ADDRESS')));

        return $next($request);
    }
}
