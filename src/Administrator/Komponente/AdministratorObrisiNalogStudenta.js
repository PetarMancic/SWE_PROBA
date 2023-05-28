import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import  { useState } from 'react';
import axios from '../../api/axios';
import './dodajPredmet.css';
import Slika from '../slike/predmet.png'


const AdministratorObrisiNalogStudenta =()=>
{

    const [studenti,setNizStudenata]=useState('');
   
    const[prikazi,setPrikazi]=useState(false);
    const [indeks,setIndeks]=useState('');


   
    
    const [selektovano, setSelektovano] = useState('');

  
    const indeksHandler= (event)=>
    {
        setIndeks(event.target.value);
    }
    
    const obrisiNalog= async ()=>
    {
        try{
            const response=await axios.post(`administrator/obrisiStudenta/${indeks}`);

            //fali prozor 

        }
        catch(error)
        {
            console.error("Greska prilikom brisanja naloga! ", error);
        }
    }

    const buttonHandler= async ()=>
    {
        
        setPrikazi(!prikazi);
        console.log('ruk');
    

        try {
            const response = await axios.get('student/vratiSveStudente');
  
            setNizStudenata(response.data.Studenti);
           
            console.log(response.data.Studenti);
  
            console.log(studenti);
          } catch (error) {
            console.error('Greška prilikom dohvatanja studenta:', error);
          }
      
      }


    return (
        <> 
    
    <div class="w3-container">
                
                <button  className="prikaziPredmete" style={{margin:"20px"}}onClick={buttonHandler}>
        {prikazi ? 'Sakrij studente' : 'Prikaži studente'}
      </button>
                
               {prikazi && (
                <>
                <table class="table table-striped  table-hover table-condensed">
                    <thead>
                        <th style={{textAlign:"center", color:"white"}}>Ime</th>
                        <th style={{textAlign:"center",color:"white"}}>Prezime</th>
                        <th style={{textAlign:"center",color:"white"}}>Smer</th>
                        <th style={{textAlign:"center",color:"white"}} >Godina </th>
                        <th style={{textAlign:"center",color:"white"}}>Broj indeksa </th>
                    </thead>

                    {/*   <tbody>

                         {studenti.map(element => (

                        <tr key={element.Id}>

                        <td>{element.Naziv}</td>

                        <td>{element.ESPB}</td>

                        <td>{element.Smer}</td>

                        <td>{element.Godina}</td>

                        <td>{element.Opis}</td>

                        </tr>

                ))} 

                    </tbody> */}
                    </table>
                    <hr />




                    <div className="donji">
                            <label htmlFor="pwd" className="tekst"> Unesite indeks studenta ciji nalog zelite da obrisete</label>
                            <input
                                id="index"
                                type="text"
                                onChange={indeksHandler}
                                />
                            <button onClick={obrisiNalog}>OBRISI  </button>
                    </div>
                        
                </>




               )
               }
                  
                    </div>
                    


</>
    )
}

 export default AdministratorObrisiNalogStudenta;