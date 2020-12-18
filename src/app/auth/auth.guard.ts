import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate {
    isLoggedIn;

    constructor(private authService: AuthService, private router: Router) { }
    // canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> | UrlTree {
    //     const token = localStorage.getItem('token');
    //     this.authService.checkToken(token).subscribe(data => this.isLoggedIn = data);
    //     console.log(this.isLoggedIn);

    //     return this.isLoggedIn;
    // }

    canActivate(): boolean {
        console.log(this.authService._isLoggedIn);

        if (!this.authService._isLoggedIn) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }

}