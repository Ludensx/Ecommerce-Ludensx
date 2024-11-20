import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private readonly jwtService: JwtService) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1];
        if (!token) throw new UnauthorizedException('El header de autorizacion no existe.')
        try {
            const secret = process.env.SECRET_KEY;
            const user = this.jwtService.verify(token, { secret });
            user.exp = new Date(user.exp * 1000);
            user.iat = new Date(user.ait * 1000);
            if(user.isAdmin) user.roles = ['admin'];
            else user.roles = ['user'];
            request.user = user;
            return true;
        }catch{
            throw new UnauthorizedException('Token invalido');
        }
    }
}