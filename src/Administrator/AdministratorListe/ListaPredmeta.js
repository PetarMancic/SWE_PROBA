import { adminSliceActions } from '../../store/index';
import { useSelector, useDispatch } from 'react-redux';
const ListaPredmeta=()=>{
    const predmeti=useSelector(state=>state.administratorPodaci.aPredmeti);
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
                {predmeti.map((objekat)=>(
                    <tr key={objekat.ID}>
                        <td>{objekat.Naziv}</td>
                        <td>{objekat.Espb}</td>
                        <td>{objekat.Semestar}</td>
                        <td>{objekat.Profesor}</td>
                    </tr>
    
                ))}
                </tbody>
            </table>
            <hr />
          </div>
    
    
    );

}
export default ListaPredmeta;