import styled from 'styled-components';

import Developer from '../../assets/development.jpg'

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100%;

    font-weight: 100;
`;

export const TitleContainer = styled.div`
    height: 12vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    background-color: #212121;

    -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);

    @media (max-width: 800px){
        height: 20vh;

        flex-direction: column;
    }
`;


export const LogoContainer = styled.div`
    height: 100%;
    width: 10%;

    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        font-family: 'Azonix Regular' !important;
        color: #fff;
    }

    @media (max-width: 800px){
        width: 100%;
        font-size: 2.5em;
    }
`;

export const Menu = styled.div`
    height: 100%;
    width: 50%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 800px){
        width: 100%;

        justify-content: space-around;
    }
`;

export const Itens = styled.a`
    height: 100%;
    width: 20%;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    color: #fff;

    h4{
       font-weight: 500;
       margin-left: 4%;
    }

    :hover{
        border-bottom: 2px solid #fff;
        cursor: pointer;
    }

    @media (max-width: 800px){
        font-size: 2em;
    }
`;

export const Bio = styled.p`
    width: 80%;

    font-weight: 300;
    font-size: 0.9em;
    color: #FFF;

    margin: 0;
    text-align: center;
`;

export const InfoContainer = styled.div`
    height: 88vh;
    width: 100%;

    background-color: #484848;
    background-image: url(${Developer});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (max-width: 800px){
        height: 80vh;
    }
`;

export const OrganizationContainer = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    background-color: rgba(72,72,72,0.9);

    @media (max-width: 800px){
        justify-content: center;
    }
`;

export const LeftContainer = styled.div`
    height: 90%;
    width: 45%;

    display: flex;
    justify-content: center;
    flex-direction: column;

    margin-left: 4%;
    h1{
        margin-bottom: 3%;
        font-size: 3em;
        font-weight: 500;
        color: #fff;
    }

    p{
        color: #ddd;
        font-weight: 300;
    }

    a{
        height: 40px;
        width: 40%;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #3f51b5;
        text-decoration: none;
        text-align: center;

        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 5%;

        cursor: pointer;

        font-weight: 500;
        color: #fff;

    :hover{
        filter: brightness(80%);
        transition: 0.8s;
        }
    }

    ul{
        margin-top: 3%;
        margin-left: 3%;
        li{
            font-weight: 500;
            color: #fff
        }
    }

    @media (max-width: 800px){
        height: 90%;
        width: 90%;

        justify-content: flex-start;

        margin: 0;

        h1{
            font-size: 5em;
        }

        p{
            font-size: 2em;
        }
        a{
            height: 80px;
            font-size: 1.5em;
        }
        ul{
            font-size: 1.6em;
        }
    }
`;

