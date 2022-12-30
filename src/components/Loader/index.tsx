import { Background, Load, StatusBar } from "./styles";

export const Loader: React.FC = () => {
  return (
    <Background>
      <StatusBar />
      <Load />
    </Background>
  );
};
