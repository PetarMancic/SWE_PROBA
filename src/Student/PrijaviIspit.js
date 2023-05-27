import Select from "react-select";
import axios from '../api/axios';
import { userSliceActions } from "../store/index";
import { useState } from "react";
import Prijavljeni from "./Informacije/Prijavljeni";
import { Table } from "react-bootstrap";
const PrijaviIspit=()=>{
    ///////////////////////////////////
    const[ima,setIma]=useState(0);
    const[tabela,setTabela]=useState(0);
    const rokovi=[{value:'1',label:'Januarski'},{value:'2',label:'Aprilksi'},{value:'3',label:'Junski'},{value:'4',label:'Jun2'},{value:'5',label:'Septembarski'},{value:'6',label:'Oktobarski'},{value:'7',label:'Oktobar2'}];
    ///////////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    const [zaPrijavu, setZaPrijavu] = useState([
        { id:'0', naziv: 'Fizika', brojPrijava: 1, daumPolaganja: '5.3.2020', cena: '0' },
        { id:'1', naziv: 'Automatika', brojPrijava: 0, daumPolaganja: '7.3.2020', cena: '0' },
        { id:'2', naziv: 'Filozofija', brojPrijava: 0, daumPolaganja: '9.3.2020', cena: '0' }
      ]);
    
      const [prijavljeni, setPrijavljeni] = useState([]);
    ///////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
      const premestiRedTabela2 = (indeks) => {
        const premestaj = zaPrijavu[indeks];
        premestaj.brojPrijava+=1;
        const noviNiz = zaPrijavu.filter((element) => element !== premestaj);
        setZaPrijavu(noviNiz);
        setPrijavljeni([...prijavljeni, premestaj]);
        setIma(1);
      };
      
      const premestiRedTabela1 = (indeks) => {
        const premestaj = prijavljeni[indeks];
        premestaj.brojPrijava-=1;
        const noviNiz = prijavljeni.filter((element) => element !== premestaj);
        setPrijavljeni(noviNiz);
        setZaPrijavu([...zaPrijavu, premestaj]);
        if(noviNiz.length===0)
        {
            console.log(prijavljeni);
            setIma(0);
        }
      };
      
    //////////////////////////////////////
        ////////////////////////////////////////
    const tabelaHandler=(event)=>{
        setTabela(1);


    }
    
    return(
          
        <div class="w3-content w3-margin-top" style={{maxWidth:"1400px",position:'absolute',top:'35px',width:'1000%'}} >
        
          <div class="w3-row-padding">
          
            <div class="w3-third">
            
              <div class=" w3-text-grey w3-card-4 login-form">
                
                <div class="w3-container p-16">
                  <h2 class="w3-large text-info">Izaberite rok u kome zelite da prijavite ispite</h2>
                  <label htmlFor="godinStudija"> Izaberite rok</label>
      <Select options={rokovi} placeholder='Odaberite'  className={` crni-tekst `} onChange={tabelaHandler} >
      </Select>

                 
                  {tabela==1 &&(<><h3 className="text-info">U ovom roku student moze prijaviti sledece ispite</h3>
                  <br />
                  <Table className="table-responseive ">
                    <thead>
                        <th>Naziv ispita</th>
                        <th>Prijave </th>
                        
                        <th> Datum </th>
                        
                        <th>Cena[rsd]</th>
                    </thead>
                    <tbody>
                    {zaPrijavu.map((red, indeks) => (
                        <tr key={indeks}>
              
              <td>{red.naziv}</td>
              <td>{red.brojPrijava}</td>
              <td>{red.daumPolaganja}</td>
              <td>{red.cena}</td>
              <td>
                <button onClick={() => premestiRedTabela2(indeks)}>Prijavi</button>
              </td>
            </tr>
          ))}


                    </tbody>
                  </Table>
                  <br />
                  <br />
                  <br />
                  <hr />
        
                  <br />
        
                </>)}
                </div>
              </div><br />
        
            </div>
        
            <div class="w3-twothird">
            <div class="w3-container w3-card login-form">
                <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>U ovom roku prijavili ste sledece ispite</h2>
                <div class="w3-container">
                {ima===0 && (<h3>Nije pronadjen nijedan ispit</h3>)}
                {ima==1&&(    <Table className="table table-responseive ">
                        <thead>
                        <th>Naziv ispita</th>
                        <th>Prijave </th>
                        
                        <th> Datum </th>
                        
                        <th>Cena[rsd]</th>

                        </thead>
                        <tbody>
                        {prijavljeni.map((red,indeks) => (
            <tr key={indeks}>
              
              <td>{red.naziv}</td>
              <td>{red.brojPrijava}</td>
              <td>{red.daumPolaganja}</td>
              <td>{red.cena}</td>
              <td><button onClick={() => premestiRedTabela1(indeks)}>Odjavi</button>
              </td>
            </tr>
          ))}

                        </tbody>
                    </Table>)}
                  <hr />
                </div>
                
              </div>
            
            
          </div>
          
        </div>
    </div>
    );

}
export default PrijaviIspit;