import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms'
import {Router} from '@angular/router'
import { Data } from 'src/assets/interface/user-info';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { DataJsonService } from 'src/app/services/dataJson.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  public passwordLogin!: FormGroup;
  userData!: Data;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService,
    ) { }

  ngOnInit(): void {
    this.passwordLogin = this.formBuilder.group({
      password: [''],
      confirmPassword: ['']
    })
    this.userData = this.localStorage.getUserData();
    
  }

  loginPassword() {
    if(this.userData?.user) {
      const userPassword = this.userData.user.password === this.passwordLogin.value.password;
      const confirmPassword = this.userData.user.password === this.passwordLogin.value.confirmPassword
      if(userPassword === confirmPassword) {
        this.passwordLogin.reset();
        this.localStorage.set('access_token', 'jedete')
        this.localStorage.remove('isOnboarded')
        this.router.navigate(['profile'])
      } 
    }
    
  }
}
