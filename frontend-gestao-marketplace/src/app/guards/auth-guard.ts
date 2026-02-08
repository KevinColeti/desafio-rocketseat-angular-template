import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../services/user";
import { UserAuthService } from "../services/user-auth";

export const authGuard: CanActivateFn = (route, state) => {

    const _userService = inject(UserService);
    const _userAuthService = inject(UserAuthService);
    const _route = inject(Router);

    const HAS_TOKEN = _userAuthService.getUserToken();

    //Nao possui token no localstorage
    if (!HAS_TOKEN) {
       return _route.navigate([
            '/login'
        ])
    }
    return true;
}