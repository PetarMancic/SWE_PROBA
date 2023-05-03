import React from 'react';
import './UspesnaReg.css';
import Card from '../Card';
import slika from '../images/check.png';

const UspesnaReg = (props) => {
    const ugasi=()=>{
        props.ugasiProzor();
    }
    return (
      <div className='registracija login-form'>
       
        <h1 className='text-succes'>Uspesno ste se registovali</h1>
        <img src={slika} className='slika text-center'></img>
        <button type='button' className='dugme' onClick={ugasi}>Okay</button>
        
        </div>
    );
  };

export default UspesnaReg;
