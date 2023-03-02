import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWT_ACCESS_GUARD_TYPE } from '../constants/auth.constants';

@Injectable()
export class JwtAccessGuard extends AuthGuard(JWT_ACCESS_GUARD_TYPE) {}
