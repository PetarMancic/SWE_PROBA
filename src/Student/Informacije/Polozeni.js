import { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { userSliceActions } from "../../store";
import axios from '../../api/axios'
const Polozeni=()=>{
  const indeks=useSelector(state=>state.studentPodaci.uBrojIndeksa);
  
  const dispatch=useDispatch();
  useEffect( ()=>{
  const fetchData=async ()=>{
    try {
      const response = await axios.get(`polozeniIspitiURoku/${indeks}`);
      

      
      if (response.status === 200) {
          
          dispatch(userSliceActions.userEspb(response.data.student.Polozeni));
          
          
          
      }

  }
  catch (err) {
      if (err.response && err.response.status === 500) {
      
            }
            }
  }


},[]);
const polozeni=useSelector(state=>state.studentPodaci.uPolozeni);

    return(
        <div class="w3-container">
        <table class="table table-striped  table-hover table-condensed table-responsive">
            <thead>
              <th>Predmet</th>
              <th>Ocena</th>
              <th>Datum polaganja</th>
              <th>ESPB</th>
            </thead>
            <tbody>
               {polozeni.map(element => (

                    <tr key={element.id}>

                      <td>{element.predmet}</td>

                     <td>{element.ocena}</td>

                     <td>{element.datumPolaganja}</td>

                     <td>{element.espb}</td>



                 </tr>




               ))}
            </tbody>
        </table>
        <hr />
      </div>


    );

}
export default Polozeni;