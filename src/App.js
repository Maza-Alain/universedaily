import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Planets from './components/Planets';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Source from './components/Source';

function App() {
  const [image, getImage ] = useState({});
  const [ showModal, changeModal ] = useState(false);
  return (
    <Fragment>
        {showModal
        ?
        <Modal
          image={image}
          changeModal={changeModal}
        />
        :null}
        <Source/>
        <Header/>
        <Slider
          showModal={showModal}
        />
        <Planets/>
        <Footer
          changeModal={changeModal}
          getImage={getImage}
        />
    </Fragment>
    
  )
}

export default App;
