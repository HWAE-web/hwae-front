import { configureStore, createSlice } from '@reduxjs/toolkit';

var part = createSlice({
    name: "part",
    initialState: [
        { id: 0, name: "Front-End" },
        { id: 1, name: "Back-End" },
        { id: 2, name: "Designer" }
    ], // 기본 state
    reducers : { 
        changeBack(state){ // 첫번째를 'backend'로
            state[0].name = "Back-End";
            state[1].name = "Front-End";
            state[2].name = "Designer";
        },
        changeDesigner(state){ // 첫번째를 'designer'로
            state[0].name = "Designer";
            state[1].name = "Front-End";
            state[2].name = "Back-End";
        },
        changeFront(state){ // 첫번째를 'frontend'로
            state[0].name = "Front-End";
            state[1].name = "Back-End";
            state[2].name = "Designer";
        },
    }
});

export var { changeBack, changeDesigner, changeFront } = part.actions;

export default configureStore({
    reducer:{
        part: part.reducer
    }
})