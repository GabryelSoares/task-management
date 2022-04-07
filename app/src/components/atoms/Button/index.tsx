import { ButtonHTMLAttributes, FC } from 'react'
import { StyledButton } from './styled';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}

export const Button: FC<ButtonProps> = ({ isOutlined, ...props }) => {
  return (
    <StyledButton
      className={`${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}
