
import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Select from "react-select";
import axios from '../../api/axios';
import { userSliceActions } from "../../store";
const Espb=()=>{
  const indeks=useSelector(state=>state.studentPodaci.uBrojIndeksa);
  const trenutna=useSelector(state=>state.studentPodaci.uTrenutnaGodStudija);
  const [godina,setGodina]=useState(1);
  const godine = [ {value:'1',label:'I'}, 
                     {value:'2',label:'II'},
                     {value: '3',label:'III'}, 
                     {value:'4',label:'IV'}
                    ];

  
  const dispatch=useDispatch();
  useEffect( ()=>{
  const fetchData=async ()=>{
    try {
      const response = await axios.get(`esbpUGodini/${indeks}/${godina}`);
      

      
      if (response.status === 200) {
          
          dispatch(userSliceActions.userEspb(response.data.ispit.Espb));
          
          
          
      }

  }
  catch (err) {
      if (err.response && err.response.status === 500) {
      
            }
            }
  }


},[godina]);
const godineHandler=(event)=>{
  setGodina(event.value);

}
const esbp=useSelector(state=>state.studentPodaci.uEspb);
    return(
        <div class="w3-container">
      <label htmlFor="godinStudija"> Izaberite godinu studija</label>
      <Select options={godine} placeholder='Odaberite'  className={` crni-tekst `} onChange={godineHandler}>
      </Select>


         <table class="table table-striped  table-hover table-condensed table-responsive">
            <thead>
              <th>Skolska godina</th>
              <th>ESPB</th>
              <th>Budzet</th>
            </thead>
            <tbody>
              <tr>
                <td>{godina}</td>
                <td>{esbp}</td>
                <td>{esbp>=48?'Da':'Ne'}</td>
               
              </tr>
           
            </tbody>
        </table>
        <hr />
      </div>
      

    );

}
export default Espb