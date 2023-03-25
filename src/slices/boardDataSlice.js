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
            // state.boardData[0].rows.push(action.payload)
            let newState =  state
            newState.boardData[0].rows.push(
              {id:(state.boardData[0].rows.length+1).toString(),  ...action.payload}
              )
            // console.log(state)

            return newState
        }
    }
})

export const { setNewCard } = boardDataSlice.actions
export const selectBoardData = (state) => state.boardData.boardData

export default boardDataSlice.reducer;