import Select from "react-select";
import Slika from './slike/form.png'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Jedan from "./Komentar/Jedan";
import axios from "axios";
const IzborPredmeta=()=>{
    const [izborniPredmeti,setIzborniPredmeti]=useState([]);
    useEffect(async ()=>{
       let res= await axios.get('http://localhost:3000/predmeti');
       console.log(res.data);
       setIzborniPredmeti(res.data);

    },[])









    const [prikaz,setPrikaz]=useState(0);
    const [komentarPredmet,setKomentarPredmet]=useState('');
    //const IzborniPredmet=useSelector(state=>state.predmetPodaci);
    const sviProfesori=useSelector(state=>state.profPodaci);
    ////////////////////////////////////////////////////
    const [jedanPredmet,setJedanPredmet]=useState('');
    const [jedanProfesor,setJedanProfesor]=useState('');
    const [IzborniPredmet,setIzborniPredmet]=useState(undefined);
    const prikazHandler=(event)=>{
        console.log(event);
        setIzborniPredmet(izborniPredmeti.filter(p=>p.id===event.value)[0]);
       
        //setJedanProfesor(sviProfesori.filter(x=>jedanPredmet.profesor===x.ime));
    }
    const sta=izborniPredmeti.map(p=>({
        label:p.ime,
        value:p.id

    })); //useSelector(state=>state.studentPodaci.uBuduciIzborni);
    return(
        <form className="login-form" >
        <div>
        <img className="index" src={Slika} style={{position:'relative', height:'200px',width:'200px'}} ></img>
        <h1>Dobro dosli na stranicu za izbor izbornih predmeta</h1>
        <h2>Ovde mozete izabrati predmet koji cete slusati u narednom semestru</h2>
        </div>

<h4>      <Select options={sta}  placeholder='Izborom predmeta prikazace se i komentari o predmetu kao i profesoru koji na tom predemtu predaje'  className={` crni-tekst `}  onChange={prikazHandler}>
    
</Select>
</h4>
{IzborniPredmet!==undefined &&(<Jedan clan={IzborniPredmet} izbor={'predmet'}/>)}
{/* {prikaz===1 &&(<Jedan clan={jedanProfesor} izvor={'profesor'}/>)} */}
{prikaz===1&&(<button>Izaberi predmet</button>)}
</form>
    );

}
export default IzborPredmeta;