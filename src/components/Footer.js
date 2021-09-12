import React from 'react';
import imagen from '../img/astronaut.png';
import axios from 'axios';
import styled from '@emotion/styled';

const Container = styled.article`
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: #000000;
        margin: 0px auto;
        
        position: relative;
        
    `;
    const Img = styled.img`
        width: 74%;
        position: absolute;
        bottom: 0;
        z-index:0;
        margin: 0px auto;
        
        left: 15%;
        @media(max-width:768px){
            width: 90%;
            left: 8%;
        }
        @media(max-width:425px){
            width: 120%;
            left: -6%;
        }
        @media(max-width:320px){
            width: 140%;
            left: -17%;
        }
    `;
    
    const Button = styled.button`
        background: rgba(233, 207, 74, 0.22);
        border: 5px solid #E9CF4A;
        box-sizing: border-box;
        font-size: 2rem;
        color: #E9CF4A;
        cursor: pointer;
        width: 35%;
        border-radius: 10px;
        padding: 3% 0;
        margin: 0px auto;
        
        
        @media (max-width:425px){
            font-size: 1.58rem;
            width: 41% ;
        }
        @media(max-width:320px){
            font-size: 1.34rem;
            width: 50%;
        }
        &:hover{
            background: rgba(233, 207, 74, 0.9);
            color: #fff;
        }
    `;
    const Paragraph = styled.p`
        
        color: #fff;
        font-size: 3.5rem;
        text-align: center;
        @media(max-width:556px){
            font-size: 2.8rem;
        }
        @media(max-width:320px){
            font-size: 2.3rem;
        }
    `;
    const Elements = styled.div`
        width: 60%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        right: 19%;
        z-index:1;
        position: absolute;
        
    `;

const Footer = ({changeModal, getImage}) => {
    
    
    const callApi = async () =>{
        const url = 'https://api.nasa.gov/planetary/apod?api_key=Ch3mMQVtjbut61AzJTqpGmD9X4OthljovXdJQmQK';
        const res = await axios.get(url);

        getImage(res);
        changeModal(true);
    }

    
    return ( 
        <Container >
            <Elements >
                <Paragraph > Discover a new sight<br></br> of<span style={{color:'#E9CF4A'}}> the universe</span> </Paragraph>
                <Button  onClick={callApi} >Got it!</Button>
            </Elements>
            
            <Img src={imagen}   alt='astronaut' /> 
            
            
        </Container>
        
     );
}
 
export default Footer;