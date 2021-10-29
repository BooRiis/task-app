import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms'
import {Router} from '@angular/router'
import { Data } from 'src/assets/interface/user-info';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  private url = '../../../assets/data.json'

  public passwordLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.passwordLogin = this.formBuilder.group({
      password: [''],
      confirmPassword: ['']
    })
  }

  loginPassword() {
    this.http.get<Data>(this.url)
    .subscribe( res => {
      const userPassword = res.user.password === this.passwordLogin.value.password;
      const confirmPassword = res.user.password === this.passwordLogin.value.confirmPassword
      if(userPassword === confirmPassword) {
        this.passwordLogin.reset();
        this.authService.setAuth(true);
        this.router.navigate(['profile'])
      } 
    }, err => {
      alert("something went wrong")
    })
  }
}
