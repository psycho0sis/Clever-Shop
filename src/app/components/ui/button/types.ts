type TButtonTheme = 'light' | 'dark';

type TSizes = 's' | 'm' | 'l';

export interface IStyledButton {
  block?: boolean;
  buttonTheme?: TButtonTheme;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  margins?: string;
  outline?: boolean;
  size?: TSizes;
}

export interface IButtonProps extends IStyledButton {
  text: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
