import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { userSliceActions } from "../../store";
import axios from '../../api/axios'
const Prijavljeni=()=>{
  const dispatch=useDispatch();
  const indeks=useSelector(state=>state.studentPodaci.uBrojIndeksa);
  useEffect( ()=>{
  const fetchData=async ()=>{
    try {
      const response = await axios.get(`prijavljeniIspitiURoku/${indeks}`);
      

      
      if (response.status === 200) {
          
          dispatch(userSliceActions.userPrijavljeni(response.data.student.Prijavljeni));
          
          
          
      }

  }
  catch (err) {
      if (err.response && err.response.status === 500) {
      
            }
            }
  }


},[]);
const prijavljeni=useSelector(state=>state.studentPodaci.uPrijavljeni);

    return (
        <div class="w3-container">
                
                  <table class="table table-striped  table-hover table-condensed table-responsive">
                    <thead>
                      <th>Predmet</th>
                      <th>Semestar</th>
                      <th>Tip</th>
                      <th>Broj prijava</th>
                    </thead>
                    <tbody>
                    {prijavljeni.map(element => (

                    <tr key={element.id}>

                      <td>{element.predmet}</td>

                    <td>{element.semestar}</td>

                    <td>{element.tip}</td>

                    <td>{element.brojPrijava}</td>



                    </tr>
                           )) } 
                    </tbody>
                </table>
                <hr />
              </div>

    );

}
export default Prijavljeni;