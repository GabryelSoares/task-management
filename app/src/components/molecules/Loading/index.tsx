import { LoaderSpin } from '../../atoms/LoaderSpin';
import { StyledContainer } from './styled';

type Props = {
  text?: string;
}

export const Loading = ({ text = 'Carregando...' }: Props) => {
  return (
    <StyledContainer>
      <LoaderSpin size={120} borderSize={16} />
      {text}
    </StyledContainer>
  );

}


