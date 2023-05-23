import { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import axios from '../../api/axios'
const Polozeni=()=>{
  const token=useSelector(state=>state.token);
  const token2="asidjajsdiasdahdnsadjasijdiajsodijaisdjaijdisajidojaijsdoiajijasoijdiasjdiojas";
  const brojIndexa=useSelector(state=>state.uBrojIndeksa);
  useEffect(()=>{
    /*const data=axios.get(`http://localhost:4200/student/vratiSve`,{
      headers:{
        'Authorization':'Bearer '+token
      }
    })
    .then(response=>console.log(response.data))
    .catch(error=>{
      if(error.response && error.response.status===401){
        console.log("nevalidan token");
      }
      else{
        console.log("Greska u axios",error);
      }
    });*/
    const data=axios.get('http://localhost:4200/studenti/1')
    .then(repsonse=>console.log(repsonse.data))
    .catch(error=>console.log("DB JSON GRESKA",error));
  },[]);
    return(
        <div class="w3-container">
        <table class="table table-striped  table-hover table-condensed">
            <thead>
              <th>Predmet</th>
              <th>Ocena</th>
              <th>Datum polaganja</th>
              <th>ESPB</th>
            </thead>
            <tbody>
              <tr>
                <td>Fizka</td>
                <td>10</td>
                <td>02.03.2002</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Fizka</td>
                <td>10</td>
                <td>02.03.2002</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Fizka</td>
                <td>10</td>
                <td>02.03.2002</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Fizka</td>
                <td>10</td>
                <td>02.03.2002</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Fizka</td>
                <td>10</td>
                <td>02.03.2002</td>
                <td>7</td>
              </tr>
            </tbody>
        </table>
        <hr />
      </div>


    );

}
export default Polozeni;