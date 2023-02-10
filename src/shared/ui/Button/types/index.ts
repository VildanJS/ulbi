import {ButtonHTMLAttributes} from "react";

export enum ButtonThemes {
  CLEAR = 'clear',
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  theme?: ButtonThemes,
}

export {
  IButton
};
