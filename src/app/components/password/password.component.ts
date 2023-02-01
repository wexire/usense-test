import { Component } from '@angular/core';
import { PasswordStrength } from 'src/app/models/password';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  password = '';
  strength: PasswordStrength = PasswordStrength.empty;

  calculateStrength(password: string): void {
    const symbols = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

    if (!password.length) this.strength = PasswordStrength.empty;
    else if (password.length < 8) this.strength = PasswordStrength.short;
    else if (
      +password ||
      /^[a-zA-Z]+$/.test(password) ||
      password.split('').every((char) => symbols.includes(char))
    )
      this.strength = PasswordStrength.easy;
    else if (
      /[0-9]/g.test(password) &&
      /[a-zA-Z]/g.test(password) &&
      password.split('').some((char) => symbols.includes(char))
    )
      this.strength = PasswordStrength.strong;
    else this.strength = PasswordStrength.medium;
  }
}
