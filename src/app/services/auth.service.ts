import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    onboarded = false;

    setAuth = (val: boolean): void => { this.onboarded = val; }

    getAuth = (): boolean => this.onboarded;
}