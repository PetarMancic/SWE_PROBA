import Slika from './slike/comment.png'
import Select from "react-select";
import axios from '../api/axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const Komentari=()=>{
    const profesori=useSelector(state=>state.studentPodaci.uProfesori);
    const predmeti=useSelector(state=>state.studentPodaci.uPredmeti);
   
    const ocene=[{label:'1',value:'1'},{label:'2',value:'2'},{label:'3',value:'3'},{label:'4',value:'4'},{label:'5',value:'5'}];
    const sta=[{label:'profrosor',value:'1'},{label:'predmet',value:'2'}]
    const [prikaz1,setZaPrikaz1]=useState(0);
    const [prikaz2,setZaPrikaz2]=useState(0);
    
    const prikazHandler=(event)=>{
        if(event.value=='1')
        {
            setZaPrikaz1(1);
        }
        if(event.value=='2')
        {
            setZaPrikaz1(2);
        }
    
    }
    const onSubmitHandler=(event)=>{
        setZaPrikaz2(1);
    }
    return(
        <>
        
        <div>

            
            <form className="login-form" >
                
                <img className="index" src={Slika}></img>
                <h1>Na ovoj stranici mozete ostaviti komentar o profesoru ili o izbornom predmetu</h1>
                <h4>Izaberite</h4>
                <h4>      <Select options={sta} placeholder='Profesor ili predemt'  className={` crni-tekst `}  onChange={prikazHandler}>
      </Select>
</h4>
{prikaz1===1 &&(<h4>      <Select options={profesori} placeholder='Profesor'  className={` crni-tekst `}  onChange={onSubmitHandler}>
      </Select>
</h4>)}
{prikaz1===2 &&(<h4>      <Select options={predmeti} placeholder='Predmet'  className={` crni-tekst `}  onChange={onSubmitHandler}>
      </Select>
</h4>)}

      {prikaz2==1 && (<>          <h4>Dajte  ocenu</h4>
                <h4>      <Select options={ocene} placeholder='Ocena'  className={` crni-tekst `}  >
      </Select>
</h4>



                <h4> Obrazlozite svoju ocenu tako sto cete dati kratak komentar</h4>
                <textarea name="comment" id="comment"
                placeholder="Enter your comment here" style={{color:'black'}}>
            </textarea>


                <button type="button" class="btn btn-secondary btn-lg">Posalji javni komentar</button></>)}



            </form>




        </div>

       

    </>  
    );
}
export default Komentari