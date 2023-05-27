import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import  { useState } from 'react';
import axios from '../../api/axios';

const AdministratorVratiIspite = () => {

    const [prikazi, setPrikazi] = useState(false);
    const [predmeti, setPredmeti] = useState([]);


    
   const handleClick = async() => {
       
       setPrikazi(!prikazi);

      
      
        try {
          const response = await axios.get('http://localhost:4200/profesor');

          setPredmeti(response.data.Predmeti);
         
          console.log(response.data.Predmeti);

          console.log(predmeti);
        } catch (error) {
          console.error('Greška prilikom dohvatanja predmeta:', error);
        }
    
      
       
    }
  
  return (
      <div class="w3-container">
                
                <button  className="prikaziPredmete" style={{margin:"20px"}}onClick={handleClick}>
        {prikazi ? 'Sakrij predmete' : 'Prikaži predmete'}
      </button>
                
               {prikazi && (
                <>
                <table class="table table-striped  table-hover table-condensed">
                    <thead>
                        <th style={{textAlign:"center", color:"white"}}>Naziv Predmeta</th>
                        <th style={{textAlign:"center",color:"white"}}>ESPB</th>
                        <th style={{textAlign:"center",color:"white"}}>Smer</th>
                        <th style={{textAlign:"center",color:"white"}} >Godina </th>
                        <th style={{textAlign:"center",color:"white"}}>Opis </th>
                    </thead>

                      <tbody>

                         {predmeti.map(element => (

                        <tr key={element.Id}>

                        <td>{element.Naziv}</td>

                        <td>{element.ESPB}</td>

                        <td>{element.Smer}</td>

                        <td>{element.Godina}</td>

                        <td>{element.Opis}</td>

                        </tr>

                ))} 

                    </tbody>
                    </table>
                    <hr />
                </>
               )
               }
                  
                    </div>
                        );





  };

  export default AdministratorVratiIspite;
  