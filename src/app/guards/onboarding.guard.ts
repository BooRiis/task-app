import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LocalStorageService } from "../services/local-storage.service";


@Injectable({
    providedIn: 'root'
})
export class OnboardingGuard implements CanActivate {
    constructor(private localStorage: LocalStorageService,
        private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const test = this.localStorage.get('isOnboarded');
        
        if (!test) {
            this.router.navigate(['username']);
            return false;
        }

        return true;
    }

}