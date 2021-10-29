import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  onboarded: boolean;

  constructor(private authService: AuthService, private router: Router) {
      this.onboarded = authService.getAuth();
   }

  ngOnInit(): void {
  }

  public goStart = (): void => {
    this.router.navigate(['username'])
  }
  goToProfile = (): void => {
    this.router.navigate(['profile'])
  }

}
