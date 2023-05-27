import { useSelector } from "react-redux";



const Predmeti=()=>{

    //const ime = useSelector(state => state.predmetPodaci.predmetNaziv);
    const naziv = useSelector(state => state.predmetPodaci.predmetNaziv);
    const espb= useSelector(state => state.predmetPodaci.predmetESPB);
    const goind = useSelector(state => state.predmetPodaci.predmetGodina);
    const opis=useSelector(state=>state.predmetPodaci.predmetOpis);

    const predmeti=useSelector(state=>state.profesorPodaci.profPredmet); // ovo ce da prihvati niz 




    console.log(predmeti);
   
    return (
        <div class="w3-container">
                
                
                  <table class="table table-striped  table-hover table-condensed">
                    <thead>
                        <th style={{textAlign:"center"}}>Naziv Predmeta</th>
                        <th style={{textAlign:"center"}}>ESPB</th>
                        <th style={{textAlign:"center"}}>Smer</th>
                        <th style={{textAlign:"center"}} >Godina </th>
                        <th style={{textAlign:"center"}}>Opis </th>
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
              </div>

    );
     

   







}
export default Predmeti;