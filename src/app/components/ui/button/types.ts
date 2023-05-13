type ButtonThemeType = 'light' | 'dark';

type SizesType = 's' | 'm' | 'l';

export interface IStyledButton {
  block?: boolean;
  buttonTheme?: ButtonThemeType;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  margins?: string;
  outline?: boolean;
  size?: SizesType;
}

export interface IButtonProps extends IStyledButton {
  text: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
