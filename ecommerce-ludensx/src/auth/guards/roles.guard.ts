import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "../enum/roles.enum";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }
    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
            'roles',
            [
                context.getHandler(),
                context.getClass()
            ])
        const req = context.switchToHttp().getRequest();
        const user = req.user;

        const hasRole = () => requiredRoles.some((role) => user?.roles?.includes(role));
        const valid = user && user.roles && hasRole();
        if(!valid) throw new ForbiddenException('El rol no tiene permiso para esta solicitud.');

        return valid;
    }
}