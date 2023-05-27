import { adminSliceActions } from '../../store/index';
import { useSelector, useDispatch } from 'react-redux';
const ListaPredmeta=()=>{
    const predmeti=useSelector(state=>state.adminPodaci.aPredmeti);
    return(
        
            <div class="w3-container">
            <table class="table table-striped  table-hover table-condensed table-responsive">
                <thead>
                  <th>Naziv</th>
                  <th>ESPB</th>
                  <th>Semestar</th>
                  <th>Profesor</th>
                </thead>
                <tbody>
                {predmeti.map(element => (
                    <tr key={element.id}>
                    <td>{element.naziv}</td>
                    <td>{element.espb}</td>
                    <td>{element.semestar}</td>
                    <td>{element.profesor}</td>
                </tr>

                    
                ))}
                </tbody>
            </table>
            <hr />
          </div>
    
    
    );

}
export default ListaPredmeta;