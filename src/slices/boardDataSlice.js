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
      ],
    selectedBoard:0
}




export const boardDataSlice = createSlice({
    name: 'boardData',
    initialState,
    reducers: {
        setBoard: (state, action) => {         
           state.boardData = action.payload 
        },
        setSelectedBoard: (state, action) => {         
          state.selectedBoard = action.payload 
       },
    }
})

export const { setBoard, setSelectedBoard } = boardDataSlice.actions
export const selectBoardData = (state) => state.boardData.boardData
export const selectSelectedBoard = (state) => state.boardData.selectedBoard

export default boardDataSlice.reducer;