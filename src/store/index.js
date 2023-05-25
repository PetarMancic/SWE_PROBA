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
const userSlice=createSlice({name:'studentPodaci',
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
});

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
    profImeRoditelja: "",
    token:"",

    profPredmet:[{
    predmetID:"",
    predmetNaziv: "",
    predmetESPB: "",
    predmetSmer: "",
    predmetGodina: "",
    predmetOpis: ""
    }],

    profKomentari:[
        {
            komentarID:"",
            tekst:"",
            ocena:""
        }
    ]
   
};

const profSlice=createSlice({
    name:'profesorPodaci',
    initialState:initialStateProf,
    reducers:
    {
        postaviIme(state,action){
           
            state.profIme=action.payload;
            
        },
        postaviPrezime(state=initialStateProf,action){
             state.profPrezime=action.payload;
            
        },
        postaviBrojTelefona(state=initialStateProf,action){
              state.profBrojTelefona=action.payload;
        },
        postaviIDBrojKartice(state=initialStateProf,action){
              state.profIDBrojKartice=action.payload;
        },
        postaviprofEmail(state=initialStateProf,action){
             state.profEmail=action.payload;
        },
        postaviprofPass(state=initialStateProf,action){
             state.profPassword=action.payload;
        },
        postaviProfDatumRodjenja(state=initialStateProf,action){
             state.profDatumRodjenja=action.payload;
        },
        postaviProfJMBG(state=initialStateProf,action){
             state.profJmbg=action.payload;
        },
        postaviprofRadniStaz(state=initialStateProf,action){
             state.profRadniStaz=action.payload;
        },
        postaviprofImeRoditelja(state=initialStateProf,action){
              state.profImeRoditelja=action.payload;
        },
        postaviToken(state=initialStateProf,action){
              state.token=action.payload;
        },
        postaviPredmete(state,action)
        {
            state.profPredmet=action.payload;
        },
        postaviKomentare(state,action)
        {
            state.profKomentari=action.payload;
        }

        
    }
})
        




const initialStatePredmet={
    predmetNaziv: "",
    predmetESPB: "",
    predmetSmer: "",
    predmetGodina: "",
    predmetOpis: ""
    
};
  

const predmetSlice=createSlice({
    name:'predmetPodaci',
    initialState:initialStatePredmet,
    reducers:
    {
        postaviNaziv(state,action){
            state.predmetNaziv=action.payload;
        },
        postaviESPB(state,action){
            state.predmetESPB=action.payload;
        },
        postaviSMER(state,action){
            state.predmetSmer=action.payload;
        },
        postavigODINU(state,action){
            state.predmetGodina=action.payload;
        },
        postaviOpis(state,action){
            state.predmetOpis=action.payload;
        }
    }

})

const initialStateAdministrator={
    aID: "",
    aUsername: "",
    aPassword: "",
    aStudenti: "",
    aProfesori: "",
    aPredmeti: "",
    aKodovi: "",
    aKartice: "",
    
    token:""
}
const adminSlice=createSlice({name:'administratorPodaci',
initialState:initialState,
reducers:{
    adminUsername(state,action){
        state.aUsername=action.payload;
    },
    adminPassword(state,action){
        state.aPassword=action.payload;
    },
    adminId(state,action){
        state.aID=action.payload;
    },
    adminStudenti(state,action){
        state.aStudenti=action.payload;
    },
    adminProfesori(state,action){
        state.aProfesori=action.payload;
    },
    adminPredmeti(state,action){
        state.aPredmeti=action.payload;
    },
    adminKodovi(state,action){
        state.aKodovi=action.payload;
    },
    adminKartice(state,action){
        state.aKartice=action.payload;
    },
    
    adminToken(state,action){
        state.token=action.payload;
    }

}
});
           
            



const store=configureStore({
    reducer:{profesorPodaci:profSlice.reducer,
        studentPodaci:userSlice.reducer,adminPodaci:adminSlice.reducer,predmetPodaci:predmetSlice.reducer},
});
/*const store=configureStore({
    reducer:rootReducer
})*/
export const  userSliceActions=userSlice.actions;
export const profSliceActions=profSlice.actions;
export const adminSliceActions=adminSlice.actions;
export const predmetSliceActions=predmetSlice.actions;
export default store;