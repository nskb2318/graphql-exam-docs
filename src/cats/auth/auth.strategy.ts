// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
// import { JWT_ACCESS_GUARD_TYPE } from '../constants/auth.constants';
//
// @Injectable()
// export class AuthStrategy extends PassportStrategy(JwtStrategy, JWT_ACCESS_GUARD_TYPE) {
//     constructor(private readonly userFindService: UserFindService) {
//         super({
//             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//             secretOrKey: authConfig.accessToken.secretKey,
//             ignoreExpiration: false,
//             passReqToCallback: true,
//         });
//     }
// }
