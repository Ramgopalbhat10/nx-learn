import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '@nx-learn/shared/data-access';

@Component({
  selector: 'nx-learn-login-entry',
  standalone: true,
  imports: [NgIf, FormsModule],
  template: `
    <div class="login-app">
      <form class="login-form" *ngIf="!isLoggedIn()" (ngSubmit)="login()">
        <label>
          Username:
          <input type="text" name="username" [(ngModel)]="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" [(ngModel)]="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      <div *ngIf="isLoggedIn()">
        <p>User is logged in!</p>
        <button (click)="logout()">Logout</button>
      </div>
    </div>
  `,
  styles: [
    `
      .login-app {
        width: 30vw;
        border: 2px dashed black;
        padding: 8px;
        margin: 0 auto;
      }
      .login-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        padding: 8px;
      }
      label {
        display: block;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  username = '';
  password = '';
  readonly userService = inject(UserService);
  isLoggedIn = this.userService.isUserLoggedIn;

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }

  logout() {
    this.userService.logout();
  }
}
