import { adminSliceActions } from '../../store/index';
import { useSelector, useDispatch } from 'react-redux';

const ListaPrijavljenihIspita=()=>{
    
    return (
        <div class="w3-container">
                
                  <table class="table table-striped  table-hover table-condensed table-responsive">
                    <thead>
                      <th>Predmet</th>
                      <th>Semestar</th>
                      <th>Tip</th>
                      <th>Broj prijava</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Fizka</td>
                        <td>I</td>
                        <td>Obavezni</td>
                        <td>I</td>
                      </tr>
                      <tr>
                        <td>Fizka</td>
                        <td>I</td>
                        <td>Obavezni</td>
                        <td>I</td>
                      </tr>
                      <tr>
                        <td>Fizka</td>
                        <td>I</td>
                        <td>Obavezni</td>
                        <td>I</td>
                      </tr>
                      <tr>
                        <td>Fizka</td>
                        <td>I</td>
                        <td>Obavezni</td>
                        <td>I</td>
                      </tr>
                  <tr>
                        <td>Fizka</td>
                        <td>I</td>
                        <td>Obavezni</td>
                        <td>I</td>
                      </tr>
                    </tbody>
                </table>
                <hr />
              </div>

    );

}
export default ListaPrijavljenihIspita;