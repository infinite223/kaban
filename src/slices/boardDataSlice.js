import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    boardData: [
      {
        id: 1,
        name: 'TO DO',
        rows: [
         
        ]
      },
      {
        id: 2,
        name: 'IN PROGRESS',
        rows: [
          
        ]
      },
      {
        id: 3,
        name: 'DONE',
        rows: [
         
        ]
      }
      ]
}




export const boardDataSlice = createSlice({
    name: 'boardData',
    initialState,
    reducers: {
        setNewCard: (state, action) => {         
            let newState =  state
            newState.boardData[0].rows.push(
              {id:(state.boardData[0].rows.length+1).toString(),  ...action.payload}
              )
            return newState
        },
        setCardTo: (state, action) => {
          let newState = state
          const from = action.payload.from
          const to = action.payload.to
          const newRows = newState.boardData[from].rows.filter((data) => data.id !== action.payload.id)
          const card = newState.boardData[from].rows.find((data) => data.id === action.payload.id)
          newState.boardData[from].rows = newRows
          newState.boardData[to].rows.push(card)
          console.log(newState, 'dsads', newRows)
          return newState;
        }
    }
})

export const { setNewCard, setCardTo } = boardDataSlice.actions
export const selectBoardData = (state) => state.boardData.boardData

export default boardDataSlice.reducer;