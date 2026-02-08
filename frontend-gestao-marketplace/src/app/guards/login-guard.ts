import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserAuthService } from "../services/user-auth";

export const loginGuard: CanActivateFn = (route, state) => {
    const _userAuthService = inject(UserAuthService);
    const _router = inject(Router);

    const TOKEN = _userAuthService.getUserToken();

    if (TOKEN) {
        _router.navigate(['/products']);
        return false;
        
    }
    return true;

}