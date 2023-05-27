import { useSelector } from "react-redux";



const Komentari=()=>{

    //const ime = useSelector(state => state.predmetPodaci.predmetNaziv);
    
      const komentari=useSelector(state=>state.profesorPodaci.profKomentari); // ovo ce da prihvati niz 




    
   
    return (
        <div class="w3-container">
                
                
                  <table class="table table-striped  table-hover table-condensed">
                    <thead>
                        <th  className="Naslovi" style={{textAlign:"center"}}>Komentari</th>
                        <th  className="Naslovi" style={{textAlign:"center"}}>Ocena</th>
                        
                        
                    </thead>

                      <tbody>

             {komentari.map(element => (

            <tr key={element.Id}>

            <td>{element.Komentar}</td>

            <td>{element.Ocena}</td>

           


 </tr>




 ))}


            </tbody>
                </table>
                <hr />
              </div>

    );
     

   







}
export default Komentari;