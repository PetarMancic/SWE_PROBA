import {configureStore, createSlice} from '@reduxjs/toolkit';
import { configure } from '@testing-library/react';
const initialState={
    uID: "",
    uIme: "",
    uPrezime: "",
    uBrojTelefona: "",
    uEmail: "",
    uPassword: "",
    uProsek: "",
    uBrojIndeksa: "",
    uTrenutnaGodStudija: "",
    uImeRoditelja: "",
    uDatumRodjenja: "",
    uJmbg: "",
    uSmer:""
}
const userSlice=createSlice({name:'podaci',
initialState:initialState,
reducers:{
    userEmail(state,action){
        state.uEmail=action.payload;
    },
    userIme(state,action){
        state.uIme=action.payload;
    },
    userId(state,action){
        state.uID=action.payload;
    },
    userLastName(state,action){
        state.uPrezime=action.payload;
    },
    userNumber(state,action){
        state.uBrojTelefona=action.payload;
    },
    userPass(state,action){
        state.uPassword=action.payload;
    },
    userProsek(state,action){
        state.uProsek=action.payload;
    },
    userIndeks(state,action){
        state.uBrojIndeksa=action.payload;
    },
    userGodina(state,action){
        state.uTrenutnaGodStudija=action.payload;
    },
    userRoditelj(state,action){
        state.uImeRoditelja=action.payload;
    },
    userDatum(state,action){
        state.uDatumRodjenja=action.payload;
    },
    userJmbg(state,action){
        state.uJmbg=action.payload;
    },
    userSmer(state,action){
        state.uSmer=action.payload;
    }







}
})

const store=configureStore({
    reducer:userSlice.reducer
});
export const  userSliceActions=userSlice.actions;
export default store;