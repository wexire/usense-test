import { Component } from '@angular/core';
import {
  PasswordStrength,
  SectionColor,
  Sections,
} from 'src/app/models/password';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  password = '';
  strength: PasswordStrength = PasswordStrength.empty;
  sections: Sections = {
    first: SectionColor.gray,
    second: SectionColor.gray,
    third: SectionColor.gray,
  };

  getSectionsColors(): void {
    if (this.strength === PasswordStrength.empty)
      this.sections = {
        first: SectionColor.gray,
        second: SectionColor.gray,
        third: SectionColor.gray,
      };
    if (this.strength === PasswordStrength.short)
      this.sections = {
        first: SectionColor.red,
        second: SectionColor.red,
        third: SectionColor.red,
      };
    if (this.strength === PasswordStrength.easy)
      this.sections = {
        first: SectionColor.red,
        second: SectionColor.gray,
        third: SectionColor.gray,
      };
    if (this.strength === PasswordStrength.medium)
      this.sections = {
        first: SectionColor.yellow,
        second: SectionColor.yellow,
        third: SectionColor.gray,
      };
    if (this.strength === PasswordStrength.strong)
      this.sections = {
        first: SectionColor.green,
        second: SectionColor.green,
        third: SectionColor.green,
      };
  }

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

    this.getSectionsColors();
  }
}
