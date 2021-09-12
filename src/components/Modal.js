import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
/* import '../index.css'; */

const Container = styled.section`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index:4;
    background-color:  rgba(44,62,80, .85);
`;

const Info = styled.div`
    width: 100%;
    position: fixed;
    background-color: #2e4053;
    height: 5vh;
    display: flex;
    z-index:6;
    bottom: 0;
    justify-content: space-around;
`;
const Buttons = styled.p`
    align-self: center;
    width: 50%;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    
    &:hover{
        background-color:  #212f3d ;
    }
`;
const ContainerImg = styled.div`
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    z-index:5;
    top: .3rem;
    @media (max-width:768px){
        top: 3.2rem;
    }
    `;
const Description = styled.div`
    width: 100%;
    height: 60vh;
    position: fixed;
    z-index:5;
    background-color:  #1c2833 ;
    bottom: 0;
    transition: all 1s ease-in;
    overflow-y: scroll;
`;
const Data = styled.p`
    font-size: 1.3rem;
    color: #fff;
    padding: 1.8rem 1rem;
`;
const Img = styled.img`
    width: 40%;
    @media (max-width:992px){
        width: 50%;
        
    }
    @media (max-width:768px){
        width: 70%;
    }
    @media (max-width:556px){
        width: 85%;
    }
    @media (max-width:425px){
        width: 95%;
    }
`;
const Modal = ({changeModal, image}) => {
    const [showed, changeShowed ] = useState(false);

    const descrip = useRef();

    const explanation = image.data.explanation;
    const copyright = image.data.copyright;
    const date = image.data.date;
    const title = image.data.title;
    const url = image.data.url;

    

    const toggleDescription = () => {
        if (!showed) {
           
            descrip.current.classList.add("descriptionShow");
            changeShowed(true);
        }
        if (showed) {
            descrip.current.classList.remove("descriptionShow");
            changeShowed(false);
        }
        
    }
    return ( 
        <Container>
            <ContainerImg>
                <Img src={url}/>
            </ContainerImg>
            <Info>
                <Buttons onClick={toggleDescription}>{showed ? 'Show info' : 'Hide info'}</Buttons>
                <Buttons onClick={() => changeModal(false) }>Close</Buttons>
            </Info>
            <Description ref={descrip}>
                <Data>
                    <span style={{color:'#E9CF4A'}}> Title:</span> {title} <br></br>
                    <span style={{color:'#E9CF4A'}}> Explanation:</span> {explanation} <br></br>
                    <span style={{color:'#E9CF4A'}}> Date:</span> {date} <br></br>
                    <span style={{color:'#E9CF4A'}}> Copyright:</span> {copyright}
                </Data>
            </Description>
        </Container>
     );
}
 
export default Modal;