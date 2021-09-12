import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import icon1 from '../img/frecuency.png';
import icon2 from '../img/magnet.png';
import icon3 from '../img/galaxy.png';
import icon4 from '../img/weather.png';

    const Container = styled.article`
        width: 100%;
        height: 100vh;
        margin: 0px auto;
        padding: 20px 0px;
        overflow: hidden;
        align-items: center;
        
        background-color: #000000;
        
        
    `;

    const Cont = styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        transition: all 1s ease-in;
    `;
    const SliderContainer = styled.div`
        width: 90%;
        flex-shrink: 0;
        flex-direction: column;
        display: flex;
        position: relative;
        margin: 0px 5%;
        justify-content: center;
        align-items: center;
        justify-content: space-evenly;
        padding: 20px 0;
        height: 80%;
        border: 4px solid #fff;
        border-radius: 10px; 
    `;
    
    const Img = styled.img`
        width: 26%;
        align-self: center;
        @media (max-width: 992px){
            width: 39%;
        }
    `;
    const Text = styled.p`
       
        color: #fff;
        padding: 10px;
        text-align: center;
        font-size: 4rem;
        @media (max-width: 768px){
            font-size: 3.5rem;
        }
       
    `;

const Slider = ({showModal}) => {
    const slide = useRef();
    let counter;
    const change = () =>{
               
                
        slide.current.style.transform = `translateX(-${counter}00%)`;
        counter++;
        

        if(counter>4){
            slide.current.style.transform = `translateX(0%)`;
            counter = 1; 
        }
    }
    
    
    useEffect(() =>{
        
            counter = 1;
            slide.current.style.transform = `translateX(0%)`;
            const interval = 3300;
            
            
            setInterval( function time () {
                if(!showModal){
                    /* console.log(showModal) */
                    change();
                } 
                
            }, interval)
    
            
        
       
    },[Slider] )
    
    return ( 
        <Container>
            <Cont  ref={slide}>
                <SliderContainer >
                    
                        <Img alt="icono1" src={icon1}/>
                        <Text>420 Hz is the universe's <span style={{color:'#E9CF4A'}}>frecuency</span> </Text>
                    
                </SliderContainer>
                <SliderContainer >
                    
                        <Img alt="icono2" src={icon2}/>
                        <Text><span style={{color:'#E9CF4A'}}>Gravity</span> join together pieces of matter</Text>
                    
                </SliderContainer>
                <SliderContainer >
                    
                        <Img alt="icono3" src={icon3}/>
                        <Text>Two millions of millions of <span style={{color:'#E9CF4A'}}>galaxies</span> </Text>
                    
                </SliderContainer> 
                <SliderContainer >
                    
                        <Img alt="icono4" src={icon4}/>
                        <Text>Could reach <span style={{color:'#E9CF4A'}}> -272 °C</span></Text>
                    
                </SliderContainer>
                
            </Cont>
         
    
        </Container>
     );
}
 
export default Slider;