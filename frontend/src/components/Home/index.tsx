import  React from 'react';
import { 
    HomeContainer, 
    TitleContainer, 
    InfoContainer, 
    LogoContainer,
    Menu,
    Itens,
    OrganizationContainer,
    LeftContainer,
} from './styles';

import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const Home = ()=> {
    
    return(
        <HomeContainer>
            <TitleContainer>

                <LogoContainer>
                    <h1>KLMN</h1>
                </LogoContainer>
                
                <Menu>
                    <Itens rel="noreferrer" target="_blank" href="https://github.com/klihsman">
                        <GitHubIcon />
                        <h4>GitHub</h4>
                    </Itens>

                    <Itens rel="noreferrer" target="_blank" href="https://instagram.com/klihsman">
                        <InstagramIcon />
                        <h4>Instagram</h4>
                    </Itens>

                    <Itens rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=5583991849900&text=Contato%20profissional%20de%20Klihsman%20Freitas">
                        <WhatsAppIcon />
                        <h4>Whatsapp</h4>
                    </Itens>

                </Menu>

            </TitleContainer>

            <InfoContainer>

                <OrganizationContainer>
                <LeftContainer>
                    <h1>Klihsman Freitas</h1>
                    <p>Olá, me chamo Klihsman Freitas e sou um full-stack developer com foco em desenvolvimento front-end na stack Js (React e React-native). Possuo nível de inglês intermediário e sou formando em Análise e Desenvolvimento de Sistemas pelo Instituto Federal da Paraíba (IFPB).</p>
                    <a rel="noreferrer" target="_blank" href="https://linkedin.com/in/klihsman-freitas ">Chama no LinkedIn</a>
                    <ul>
                        <li>UX e UI Design</li>
                        <li>React e React Native</li>
                        <li>Rest API</li>
                        <li>Node.js</li>
                    </ul>
                </LeftContainer>                
                </OrganizationContainer>
            </InfoContainer>
        </HomeContainer>
    )
}

export default Home;