import * as S from './styles';

const Button: React.FC = ({ children }) => {
  return <S.Button type="button">{children}</S.Button>;
};

export default Button;
