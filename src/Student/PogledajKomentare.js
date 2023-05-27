import { useState } from 'react';
import Slika from '../Student/slike/comments.png';
import Slika2 from '../Student/slike/muskarac.png';
import Select from "react-select";
import axios from '../api/axios';
import Jedan from './Komentar/Jedan';
import { useSelector } from 'react-redux';
const PogledajKomentare=()=>{
   const nizKomentaraProfa=useSelector(state=>state.profesorPodaci.profComments);
   const [izbor,setIzbor]=useState(0); 
   const nizKomentaraPredmet=useSelector(state=>state.predmetPodaci.komentar);
   const sta=[{label:' o profesoru',value:'profa'},{label:'o predmetu',value:'predmet'}];
   const prikazHandler=(event)=>
   {
        if(event.value==='profa')
        {
            setIzbor(1);
        }
        if(event.value==='predmet')
        {
            setIzbor(2);
        }
   }
   return(
        
        <form className="login-form" >
                    <div>
                    <img className="index" src={Slika} style={{position:'relative',height:'200px'}} ></img>
                    <h1>Dobro dosli na stranicu za citanje komentara</h1>
                    <h2>Na ovoj stranici mozete da se informisete o nekom preofeoru ili predmetu</h2>
                    </div>

         <h4>      <Select options={sta} placeholder='Izaberite o kome zelite da vidite komentare'  className={` crni-tekst `}  onChange={prikazHandler}>
      </Select>
</h4>
       {izbor===1&&( <>
       
                      {nizKomentaraProfa.map((element,indeks) => (
                        <div key={indeks}>
                        <Jedan clan={element} izbor={izbor}/>

                        </div>

                            ))}
                            </>
                            )}
        {izbor===2&&( <>               {nizKomentaraPredmet.map((element,indeks) => (
                        <div key={indeks}>
                        <Jedan clan={element} izbor={izbor}/>

                        </div>

                            ))}
                            </>
                            )}

        </form>
         );

}
export default PogledajKomentare;