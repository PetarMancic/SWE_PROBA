import React from "react";
import { profSliceActions } from "../store";
import { useSelector } from "react-redux";
const ProfesorProfil = () => {
    const ime = useSelector(state => state.profIme);
    const prezime = useSelector(state => state.profPrezime);
    const profBrojTelefona = useSelector(state => state.profBrojTelefona);

    return (
        <div>
            {ime}
            {prezime}
            {profBrojTelefona}
        </div>

    )




}

export default ProfesorProfil;