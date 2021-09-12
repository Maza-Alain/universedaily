import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import imageSun from '../img/sun.png'
import imageMerc from '../img/mercurio.png';
import imageVen from '../img/venus.png';
import imageEar from '../img/earth.png';
import imageMar from '../img/mars.png';
import imageJup from '../img/jupiter.png';
import imageNep from '../img/neptune.png';
import imageSpace from '../img/space.png';

const Container = styled.article`
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-size: contain;
        background:url(${imageSpace}); 
        
    `;
    

    
    /*PLANETS*/

    const AllPlanets = styled.div`
        display: flex;
        position: relative;
        margin: auto 0;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
      
    `;
    
    const Sun = styled.img`
        width: 85%;
        z-index: 2;
        transition: all 1s ease-in ;
    `;

    const Mercury = styled.img`
        
        position: absolute;
        width: 5%;
        z-index: 3;
        transition: all 1s ease-in ;
    `;

    const Venus = styled.img`
        position: absolute;
        width: 14%;
        z-index: 2;
        transition: all 1s ease-in ;
    `;

    const Earth = styled.img`
       position: absolute;
        width: 30%;
        z-index: 3;
        transition: all 1s ease-in ;
        
`;
    const Mars = styled.img`
       position: absolute;
        width: 17%;
        z-index: 1;
        transition: all 1s ease-in ;
        
    `;
    const Jupiter = styled.img`
        position: absolute;
        width: 29%;
        z-index: 0;
        transition: all 1s ease-in ;
    `;
    const Neptune = styled.img`
    position: absolute;
    width: 29%;
    z-index: 0;
    transition: all 1s ease-in ;
`;
const Planets = () => {
    const sun = useRef();
    const mercury = useRef();
    const venus = useRef();
    const earth = useRef();
    const mars = useRef();
    const jupiter = useRef();
    const neptune = useRef();
    
    useEffect( () => {
        window.onscroll = () => {
            

            const ws = window.innerWidth;

            const screenScroll = document.documentElement.scrollTop/2;
            const sunPosition = (sun.current.getBoundingClientRect().top) ;
            
            /* console.log('sol', sunPosition) */ /* getBoundingClientRect shows the distance betweeen the element and the top */
            /* console.log('done', screenScroll) */ /* scrolltop is the amount of scroll that i've done */
        
            /* so, when the amunt of scroll get over thedistance between the element and top, you activate something*/
            /* console.log(sunPosition) 
            console.log(screenScroll*2.1) */
            
            if (screenScroll > sunPosition){
                
               
                earth.current.style.transform = 'translateX(52%)';
                mars.current.style.transform = 'translateX(-176%)';
                mercury.current.style.transform = 'translateX(-190%)';
                venus.current.style.transform = 'translateX(185%)';
                jupiter.current.style.transform = 'translateX(-50%)';
                neptune.current.style.transform = 'translateX(90%)';
                
            } 
            
            if ((sunPosition >450 || screenScroll>800) && ws>768){
                earth.current.style.transform = 'translateX(0%)';
                mercury.current.style.transform = 'translateX(0%)';
                mars.current.style.transform = 'translateX(0%)';
                venus.current.style.transform = 'translateX(0%)';
                jupiter.current.style.transform = 'translateX(0%)';
                neptune.current.style.transform = 'translateX(0%)';
            } 

            if ((sunPosition > 440 || screenScroll>1200) && ws<=768 && ws>=320){
                earth.current.style.transform = 'translateX(0%)';
                mercury.current.style.transform = 'translateX(0%)';
                mars.current.style.transform = 'translateX(0%)';
                venus.current.style.transform = 'translateX(0%)';
                jupiter.current.style.transform = 'translateX(0%)';
                neptune.current.style.transform = 'translateX(0%)';
            } 

            if (screenScroll>1050 &&  ws>=320){
                earth.current.style.transform = 'translateX(0%)';
                mercury.current.style.transform = 'translateX(0%)';
                mars.current.style.transform = 'translateX(0%)';
                venus.current.style.transform = 'translateX(0%)';
                jupiter.current.style.transform = 'translateX(0%)';
                neptune.current.style.transform = 'translateX(0%)';
            } 
        }
        
    }, [])
   
    return (  
        <Container>
            
            <AllPlanets>
                <Sun alt="sun" ref={sun} src={imageSun} /* onScroll={test} *//>
                <Mercury alt="mercury" ref={mercury} id="mercury" src={imageMerc}/>
                <Venus alt="venus" ref={venus} src={imageVen}/>
                <Earth alt="earth"  ref={earth} src={imageEar}/>
                <Mars alt="mars"  ref={mars} src={imageMar}/>
                <Jupiter alt="jupiter"  ref={jupiter} src={imageJup}/>
                <Neptune alt="neptune" ref={neptune} src={imageNep}/>
            </AllPlanets>
        </Container>
    );
}
 
export default Planets;