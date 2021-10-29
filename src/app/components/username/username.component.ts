import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import {Router} from '@angular/router'
import { Data } from 'src/assets/interface/user-info';
 
@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  private url = '../../../assets/data.json'
  

  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      displayName: ['']
    })
  }

  login() {
    this.http.get<Data>(this.url)
    .subscribe( res => {
        const user = res.user.displayName === this.loginForm.value.displayName
        if(user) {
          alert("Login Succses");
          this.loginForm.reset();
          this.router.navigate(['password'])
        } else {
          alert("user not found")
        }
      }, err => {
        alert("something went wrong")
      });
  }

}
