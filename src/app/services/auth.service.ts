import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private localeStorage: LocalStorageService) {}

    getAuth = (): boolean => {
        const access_token = this.localeStorage.get('access_token');
        return !!access_token;
    }
}