export enum PasswordStrength {
  empty = 'empty',
  short = 'short',
  easy = 'easy',
  medium = 'medium',
  strong = 'strong',
}

export type Sections = {
  first: SectionColor;
  second: SectionColor;
  third: SectionColor;
};

export enum SectionColor {
  gray = 'gray',
  red = 'red',
  yellow = 'yellow',
  green = 'green',
}
