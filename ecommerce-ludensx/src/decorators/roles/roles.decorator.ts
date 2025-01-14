import { SetMetadata } from "@nestjs/common";
import { Role } from "src/auth/enum/roles.enum";

export const Roles = (...Roles: Role[]) => SetMetadata('roles', Roles);
