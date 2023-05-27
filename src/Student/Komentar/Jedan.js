
import Slika2 from '../../Student/slike/muskarac.png';

const Jedan=(props)=>{
    const Profesor='Profesor';
    const Predmet='Izborni predmet';
    console.log("pufla",props.clan);
    return (
        <div>
            
        <form className="login-form" >
            <div className='row'>
            <div className='col-sm-2'><img src={Slika2} style={{position:'relative',height:'100px'}}></img></div>
           <div className='col-sm-10'> <h2 >Komentar daje:{props.clan.ime} {props.clan.prezime}</h2></div>
            </div>
            <h2 htmlFor="username" >{props.izbor==1 ?Profesor:Predmet}</h2>
            <div style={{backgroundColor:'white'}}>
                <h2 style={{color:'black'}}>{props.clan.tema}</h2>
            </div>
            
            <h2 htmlFor="username" >Ocena</h2>
            <div style={{backgroundColor:'white'}}>
                <h2 style={{color:'black'}}>{props.clan.ocena}</h2>
            </div>
            

            <h2 htmlFor="username" >Komentari</h2>
            <div style={{backgroundColor:'white',color:'black'}}>
               <ul>
                {
                    props.clan.komentari.map(p=><li>{p.ime} </li>)
                }
               </ul>
            </div>




            

        </form>




    </div>  

    );

}
export default Jedan;