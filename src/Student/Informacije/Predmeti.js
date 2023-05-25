import { useSelector } from "react-redux";



const Predmeti=()=>{

    //const ime = useSelector(state => state.predmetPodaci.predmetNaziv);
    const naziv = useSelector(state => state.predmetPodaci.predmetNaziv);
    const espb= useSelector(state => state.predmetPodaci.predmetESPB);
    const goind = useSelector(state => state.predmetPodaci.predmetGodina);
    const opis=useSelector(state=>state.predmetPodaci.predmetOpis);

    console.log(`Ovde je predmeti ${naziv}`);
      console.log(`PP ${espb}`);
      console.log(`PP ${goind}`);
      console.log(`PP ${opis}`);

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
                            <td>{naziv}</td>
                            <td>{espb}</td>
                            <td>{goind}</td>
                            <td>{opis}</td>
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