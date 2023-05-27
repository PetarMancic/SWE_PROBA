import { useSelector } from "react-redux";

const ListaKartica=()=>{
  const kartice=useSelector(state=>state.adminPodaci.aKartice);
    return(
        
            <div class="w3-container ">
            <table class="table table-striped  table-hover table-condensed table-responsive">
                <thead>
                  <th>Broj kartice</th>
                  <th>Profesor</th>
                 
                </thead>
                <tbody>
                {kartice.map(element => (
                    <tr key={element.id}>
                    <td>{element.Broj}</td>
                    <td>{element.Profesor}</td>
                    
                </tr>

                    
                ))}
              
                </tbody>
            </table>
            <hr />
          </div>
    
    
    );

}
export default ListaKartica;