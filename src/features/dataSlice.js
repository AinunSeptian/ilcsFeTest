import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'allData',
    initialState: {
        npwp: "",
        name: "",
        transaction: "export",
        country: [],
        harbor: [],
        hsCode: {},
    },
    reducers: {
        updatePerusahaan: (state, action) => {
            state.npwp = action.payload.npwp;
            state.name = action.payload.name;
            state.transaction = action.payload.transaction;
            state.country = action.payload.country;
            state.harbor = action.payload.harbor;
        },
        updateBarang: (state, action) => {
            state.hsCode = action.payload.hsCode;
        }
    }
});

export const { updatePerusahaan, updateBarang } = dataSlice.actions;
export default dataSlice.reducer;