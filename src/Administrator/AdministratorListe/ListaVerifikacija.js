import { adminSliceActions } from '../../store/index';
import { useSelector, useDispatch } from 'react-redux';

const ListaVerifikacija=()=>{
const verifikacija=useSelector(state=>state.adminPodaci.aKodovi);
    return (
        <div class="w3-container">
                
                  <table class="table table-striped  table-hover table-condensed table-responsive">
                    <thead>
                      
                      <th>Tip</th>
                      <th>Kod</th>
                    </thead>
                    <tbody>
                    {verifikacija.map(element => {
                    <tr key={element.id}>
                    <td>{element.tip}</td>
                    <td>{element.kod}</td>
                    
                </tr>

                    
                })}
              
                    </tbody>
                </table>
                <hr />
              </div>

    );

}
export default ListaVerifikacija;