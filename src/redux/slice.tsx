import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
    name: "TableData",
    initialState: {
        TableData: {
            value: []
        }
    },
    reducers: {
        addToTable: (state, action) => {
            state.TableData.value = action.payload
        },
        removeFromTable: (state, action) => {
            state.TableData.value = state.TableData.value.filter((val) =>
                val !== action.payload.Year)
        },
        searchInDaat: (state, action) => {
            state.TableData.value = action.payload
        }
    }
})

export default tableSlice.reducer;
export const { addToTable, removeFromTable, searchInDaat } = tableSlice.actions;