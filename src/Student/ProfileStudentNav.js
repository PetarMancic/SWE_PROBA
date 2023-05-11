import {Link} from 'react-router-dom'
const ProfileStudentNav=()=>{
    return(
        <nav class="navbar navbar-inverse" style={{position:'relative',bottom:'0px'}} >
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <Link class="navbar-brand active" to='/profil'>Sakrij</Link>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li> <Link to="./polozeni">Polozeni ispiti</Link></li>
        <li> <Link to="./prijavljeni">Prijavljeni ispiti</Link></li>
        <li><Link to="./espb">ESPB</Link></li>
        <li><Link to="./komentari">Svoji komentari</Link></li>
      </ul>
     
    </div>
  </div>
</nav>
    );
}
export default ProfileStudentNav;