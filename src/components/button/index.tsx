import styles from "@components/button/styles.module.scss";
import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(styles.button, props.className)}>
      {children}
    </button>
  );
}

export function ButtonPrimary({ children, ...props }: ButtonProps) {
  return (
    <Button {...props} className={cn(styles.buttonPrimary, props.className)}>
      {children}
    </Button>
  );
}

export function ButtonSecondary({ children, ...props }: ButtonProps) {
  return (
    <Button {...props} className={cn(styles.buttonSecondary, props.className)}>
      {children}
    </Button>
  );
}
