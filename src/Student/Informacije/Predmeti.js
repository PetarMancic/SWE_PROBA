import { useSelector } from "react-redux";



const Predmeti=()=>{

    const ime = useSelector(state => state.predmetPodaci.predmetNaziv);

    console.log(`Ovde je predmeti ${ime}`);

    const bastami="p";






    return (
        <div class="w3-container">
                
                
                  <table class="table table-striped  table-hover table-condensed">
                    <thead>
                        <th>Naziv Predmeta</th>
                        <th>Semestar</th>
                        <th>Tip</th>
                        <th>Broj prijava</th>
                    </thead>

                    <tbody>
                      <tr>
                            <td>{ime}</td>
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
export default Predmeti;