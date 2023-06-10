export interface IStyledIconButton {
  isfill: string;
}

export interface IIconButtonProps extends IStyledIconButton {
  children: JSX.Element;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
