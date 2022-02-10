import { HTMLAttributes } from 'react';
import illustrationMulherHome from '../../assets/home/homeMulher.svg';
import HOSPTECLogotipo from '../../assets/home/logotipo.svg';
import Menu from '../Menu';
import {
  Background,
  PrimaryBlue,
  Container,
  Header,
  PrimaryWhite,
  Strong,
  LogoContainer,
  Logo,
  InternContainer,
  BackgroundSecond,
  WomanImage,
  BackgroundSecondBlue,
  ContentBackground,
  Content,
  IllustrationContainer,
} from './styles'

interface BackgroundHomeProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element
  backgroundColor?: string
  title?: string
}

const BackgroundHome = (
  {
  children,
  title = "Bem vindo a página inicial",
  backgroundColor,
  ...rest
  }:BackgroundHomeProps) => (
        <Background
        style={{
          background: backgroundColor
        }}
        {...rest}
        >
          <Menu/>
        <PrimaryBlue>
          <Container>
            <Header>
            </Header>
            <ContentBackground>
            <Content>

            </Content>
            </ContentBackground>
          </Container>
          <IllustrationContainer>

          </IllustrationContainer>
        </PrimaryBlue>
    </Background>
    )

export default BackgroundHome
