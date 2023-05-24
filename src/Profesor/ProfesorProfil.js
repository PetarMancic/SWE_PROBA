import React from "react";
import { useSelector, useDispatch } from 'react-redux';

const ProfesorProfil = () => {
    const ime = useSelector(state => state.profesorPodaci.profIme);
    const prezime = useSelector(state => state.profesorPodaci.profPrezime);
    const profBrojTelefona = useSelector(state => state.profesorPodaci.profBrojTelefona);
    console.log(ime);
    return (
        <div>
            {ime}
            {prezime}
            {profBrojTelefona}
        </div>

    )




}

export default ProfesorProfil;