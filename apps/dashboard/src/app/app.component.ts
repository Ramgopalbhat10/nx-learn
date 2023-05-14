import { NgIf } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from '@nx-learn/shared/data-access';

@Component({
  selector: 'nx-learn-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly router = inject(Router);
  readonly userService = inject(UserService);
  isLoggedIn = this.userService.isUserLoggedIn;
  
  constructor() {
    effect(() => {
      if(this.isLoggedIn()) {
        this.router.navigateByUrl("");
      } else {
        this.router.navigateByUrl("login");
      }
    });
  }

}
