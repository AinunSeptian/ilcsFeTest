import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'perusahaan',
    initialState: {
        npwp: "",
        name: "",
        transaction: "export",
        country: [],
        harbor: [],
        hsCode: {},
    },
    reducers: {
        update: (state, action) => {
            state.npwp = action.payload.npwp;
            state.name = action.payload.name;
            state.transaction = action.payload.transaction;
            state.country = action.payload.country;
            state.harbor = action.payload.harbor;
        },
        getHsCode: (state, action) => {
            state.hsCode = action.payload.hsCode;
        }
    }
});

export const { update, getHsCode } = dataSlice.actions;
export default dataSlice.reducer;