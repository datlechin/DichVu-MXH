<?php

namespace App\Enums;

enum UserRole: string
{
    case Admin = 'admin';
    case Member = 'member';
    case Collaborator = 'collaborator';
    case Partner = 'partner';
    case Distributor = 'distributor';
}
