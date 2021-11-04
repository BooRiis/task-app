import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Data } from "src/assets/interface/user-info";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class DataJsonService {
    constructor(private http: HttpClient, private localeStorage: LocalStorageService) {

    }

    loadJson = (url: string): void => {
        this.http.get<Data>(url)
        .subscribe(data => {
            this.localeStorage.set('userData', data)
        })

    }
}