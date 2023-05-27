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
    token:"",
    uEspb:0,
    uPolozeni:[{id:'123',predmet:'Predmet7',ocena:'9',datumPolaganja:'4.8.2020',espb:'6'}],
    uPrijavljeni:[{id:'123',predmet:'predmet7',semestar:'8',tip:'obavezni',brojPrijava:'0'}],
    uProfesori:[{label:'Dragan',value:1},{label:'Ladan',value:2},{label:'Zedan',value:3}],
    uPredmeti:[{label:'AOR1',value:1},{label:'AOR2',value:2},{label:'AOR3',value:3}],
    uBuduciIzborni:[{label:'Teorija igara',value:'Teorija igara'},{label:'Multimedija',value:'Multimedija'},{label:'Dbd',value:'Dbd'}],
   
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
    },
    userEspb(state,action)
    {
        state.uEspb=action.payload;
    },
    userProfesori(state,action)
    {
        state.uProfesori=action.payload;
    },
    userPredmeti(state,action)
    {
        state.uPredmeti=action.payload;
    },
    userBuduciIzborni(state,action)
    {
        state.uBuduciIzborni=action.payload;
    }

}
});
const initialPredmeti={
    ime:'Izborni',
    tip:'i',
    profesor:'Dragan',
    
    komentar:[{ime:'Ucenik',prezime:'Ucenic',tip:'predmet',ocena:'9',komentar:'Lagan je'}]
};
const predmetiSlice=createSlice({name:'predmetPodaci',
initialState:initialPredmeti,
reducers:{
   predmetiIme(state,action)
   {
        state.ime=action.payload;
   },
   predmetiTip(state,action)
   {
        state.tip=action.payload;
   },
   predmetiProfesor(state,action)
   {
        state.profesor=action.payload;
   },
   predmetiOcena(state,action)
   {
        state.ocena=action.payload;
   },
   predmetiProfesor(state,action)
   {
        state.profesor=action.payload;
   },
   predmetiKomentar(state,action)
   {
        state.komentar=action.payload;
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
    profComments:[{ime:'',
    prezime:'Lagan',
    tema:'',
    komentar:'Dobro predava brt'}],
    Predmet:{
        ime:'Aor',
    

    }
   
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
        postaviKomentar(state,action)
        {
            state.profComments=action.payload;
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
});

const initialStateAdministrator={
    aID: "",
    aUsername: "username",
    aPassword: "",
    aStudenti: [{id:'100',brojIndeksa:'172834',ime:'Rajko',prezime:'Rajkovic',godina:'4'}],
    aProfesori: [{id:'1',brojKatrice:'1',ime:'Dragan',prezime:'Dragan',prosecnaOcena:'7'},{id:'1',brojKatrice:'1',ime:'Dragan',prezime:'Dragan',prosecnaOcena:'7'},{id:'1',brojKatrice:'1',ime:'Dragan',prezime:'Dragan',prosecnaOcena:'7'},{}],
    aPredmeti: ["Predmet1","Predmet2","Predmet3"],
    aKodovi: [{tip:'',kod:''}],
    aKartice: ["","",""],
    
    token:""
}
const adminSlice=createSlice({name:'administratorPodaci',
initialState:initialStateAdministrator,
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
        studentPodaci:userSlice.reducer,adminPodaci:adminSlice.reducer,predmetPodaci:predmetiSlice.reducer},
});
/*const store=configureStore({
    reducer:rootReducer
})*/
export const profSliceActions=profSlice.actions;
export const  userSliceActions=userSlice.actions;
export const adminSliceActions=adminSlice.actions;
export const predmetPodaciActions=predmetiSlice.actions;

export default store;