import { FC } from 'react'
import { MdTask } from 'react-icons/md';

interface Props {
  className?: string;
  size: number;
  onClick?: () => void;
}

export const Logo: FC<Props> = ({ className = '', ...rest }) => {


  return (
    <>
      <MdTask className={`logo ${className}`} {...rest} />
    </ >
  );

}
