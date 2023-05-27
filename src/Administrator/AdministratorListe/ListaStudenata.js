import { useSelector } from "react-redux";

const ListaStudenata=()=>{
  const studenti=useSelector(state=>state.adminPodaci.aStudenti);
    return(
        
            <div class="w3-container">
            <table class="table table-striped  table-hover table-condensed table-responsive">
                <thead>
                  <th>Broj indeksa</th>
                  <th>Ime</th>
                  <th>Prezime</th>
                  <th>Godina studija</th>
                </thead>
                <tbody>
                {studenti.map(element => (
                    <tr key={element.ID}>
                    <td>{element.brojIndeksa}</td>
                    <td>{element.ime}</td>
                    <td>{element.prezime}</td>
                    <td>{element.godina}</td>
                    
                </tr>

                    
                ))}
              
                </tbody>
            </table>
            <hr />
          </div>
    
    
    );

}
export default ListaStudenata;