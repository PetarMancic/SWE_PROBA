import React from 'react';
import classes from './ErrorModal.module.css';
import Card from '../Card';


const ErrorModal = (props) => {
    return (
      <div>
        <div className={classes.backdrop} onClick={props.ugasiProzor} />
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
        <div>
        <img className="index" src={props.slika}></img>
        </div>
            
          <footer className={classes.actions}>
            <button  onClick={props.ugasiProzor}> Okay</button>
          </footer>
        </Card>
      </div>
    );
  };

export default ErrorModal;
