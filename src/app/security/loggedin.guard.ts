import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { UsuarioService } from "src/app/core/usuario.service";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

    constructor(private usuarioService: UsuarioService, private router: Router) { }

    canLoad(): boolean {
        return this.checkAuthentication();
    }

    canActivate(): boolean {
        return this.checkAuthentication();
    }

    checkAuthentication(): boolean {
        const loggedIn = this.usuarioService.isLoggedIn();
        if (!loggedIn) {
            this.router.navigate(['/login']);
        }
        return loggedIn;
    }
}