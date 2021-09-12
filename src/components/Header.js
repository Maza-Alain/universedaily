import React from 'react';
import styled from '@emotion/styled';
import imagen from '../img/universe1.png';

const Container = styled.header`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
   /*  background-image: url(${imagen});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed; */
`;
const Imge = styled.img`
    width: 100%; 
    object-fit: cover;
    animation: zoom 25s ease-in infinite;
    @keyframes zoom {
    0%{
        transform: scale(100%);
    }
    75%{
        transform: scale(150%);
    }
    100%{
        transform: scale(100%);
    }
    }
    
`;
const Title = styled.h1`
    font-size: 6rem;
    position: absolute;
    left: 1.5rem;
    color:#fff ;
    z-index: 2;
    animation: start 1.5s ease-in;
    @keyframes start {
    from{
        
        opacity: 0%;
    } 
    to{
      
        opacity: 100%;
    }  
    }
    @media (max-width: 556px){
        font-size: 4rem;
    }
    @media (max-width: 375px){
        font-size: 3.5rem;
    }
    
   
`;
const Span = styled.span`
    color:#E9CF4A; 
    top:5rem;
    position :absolute ;
    @media (max-width: 556px){
        top:4rem;
    }
`;

const Header = () => {
    return ( 
        <Container >
            <Imge  src={imagen} alt='Mars'/>
            <Title>UNIVERSE <br></br> <Span>DAILY</Span></Title>
            
            
        </Container>
     );
}
 
export default Header;