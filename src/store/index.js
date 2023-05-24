import {configureStore, createSlice,combineReducers} from '@reduxjs/toolkit';
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
    uSmer:"",
    token:""
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
    userPrezime(state,action){
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
    },
    userToken(state,action){
        state.token=action.payload;
    }

}
})

const initialStateProf={
    profIme: "",
    profPrezime: "",
    profBrojTelefona: "",
    profIDBrojKartice: "",
    profEmail: "",
    profPassword: "",
    profDatumRodjenja: "",
    profJmbg: "",
    profRadniStaz:"",
    profImeRoditelja: ""
   
}

const profSlice=createSlice({
    name:"podaci",
    initialStateProf:initialStateProf,
    reducers:
    {
        postaviIme(state,action){
            state.profIme=action.payload;
        },
        postaviPrezime(state,action){
            state.profPrezime=action.payload;
        },
        postaviBrojTelefona(state,action){
            state.profBrojTelefona=action.payload;
        },
        postaviIDBrojKartice(state,action){
            state.profIDBrojKartice=action.payload;
        },
        postaviprofEmail(state,action){
            state.profEmail=action.payload;
        },
        postaviprofPass(state,action){
            state.profPassword=action.payload;
        },
        postaviProfDatumRodjenja(state,action){
            state.profDatumRodjenja=action.payload;
        },
        postaviProfJMBG(state,action){
            state.profJmbg=action.payload;
        },
        postaviprofRadniStaz(state,action){
            state.profRadniStaz=action.payload;
        },
        postaviprofImeRoditelja(state,action){
            state.profImeRoditelja=action.payload;
        }


    }
})

const rootReducer = combineReducers({
    reducer1: userSlice.reducer,
    reducer2: profSlice.reducer
  });


/*const store=configureStore({
    reducer:userSlice.reducer
});*/

const store=configureStore({
    reducer:rootReducer
})
export const  userSliceActions=userSlice.actions;
export const profSliceActions=profSlice.actions;
export default store;