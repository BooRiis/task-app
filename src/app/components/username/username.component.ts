import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import {Router} from '@angular/router'
import { Subscription } from 'rxjs';
import { DataJsonService } from 'src/app/services/dataJson.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Data } from 'src/assets/interface/user-info';
 
@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  userData!: Data;
  
  public loginForm!: FormGroup;


  constructor(private localStorage: LocalStorageService, private dataJsonService: DataJsonService,
    private formBuilder: FormBuilder, private router: Router) { }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      displayName: ['']
    })
    this.dataJsonService.loadJson('data.json');
  }

  login() {
    this.userData = this.localStorage.getUserData();
    
    if (this.userData?.user){
      const user = this.userData.user.displayName === this.loginForm.value.displayName
      if(user) {
        this.loginForm.reset();
        this.localStorage.set('isOnboarded', true)
        this.router.navigate(['password'])
      }
    }
  }
}
