import { useSelector } from "react-redux";

const ListaProfesora=()=>{
  const profesori=useSelector(state=>state.adminPodaci.aProfesori);
    return(
        
            <div class="w3-container">
            <table class="table table-striped  table-hover table-condensed table-responsive">
                <thead>
                  <th>Broj kartice</th>
                  <th>Ime</th>
                  <th>Prezime</th>
                  <th>Prosecna ocena</th>
                </thead>
                <tbody>
                {profesori.map(element => (
                    <tr key={element.ID}>
                    <td>{element.brojKartice}</td>
                    <td>{element.ime}</td>
                    <td>{element.prezime}</td>
                    <td>{element.prosecnaOcena}</td>
                </tr>

                    
                ))}
             
                </tbody>
            </table>
            <hr />
          </div>
    
    
    );

}
export default ListaProfesora;