import { createSlice } from "@reduxjs/toolkit";
import { dates } from "../../../dates";

const nameIdSum=dates.map(item1 => { return item1.taomlar.map(item2 => { return item2.turi.map(item3 => { return item3})})})
const nameIdSum2=[...nameIdSum[0], ...nameIdSum[1], ...nameIdSum[2]]
const nameIdSum3=[...nameIdSum2[0], ...nameIdSum2[1], ...nameIdSum2[2], ...nameIdSum2[3]]

export const todoSlice = createSlice({

  // const a = 
  name: "todo",
  initialState: {
    todos: [],
    inputTaskValue: "",
    selectedEditTask: undefined,
    count: 1,
    afitsantName: [
       {
        id:1,
        name: 'A', 
        mijozlar:[]
       },
       {
        id:2,
        name: 'B', 
        mijozlar:[]
       },
       {
        id:3,
        name: 'C', 
        mijozlar:[]
       },
       {
        id:4,
        name: 'D', 
        mijozlar:[]
       },
       {
        id:5,
        name: 'E', 
        mijozlar:[]
       },
       {
        id:6,
        name: 'F', 
        mijozlar:[]
       },
       {
        id:7,
        name: 'G', 
        mijozlar:[]
       },
       {
        id:8,
        name: 'K', 
        mijozlar:[]
       },
      ],
    countMijoz: 0,
    index: 0,
    indexMijoz: 0,
  },
  reducers: {
    addTask: (state, action) => {
      const idxTask = state.afitsantName[state.index].mijozlar.findIndex(
        (e) => e.orni === action.payload 
        )
        for (let i = 0; i < nameIdSum3.length; i++) {
          if (state.inputTaskValue===nameIdSum3[i].name) {
            state.afitsantName[state.index].mijozlar[idxTask].buyurtma.push({id: nameIdSum3[i].id, label: nameIdSum3[i].name, sum: nameIdSum3[i].sum,count: state.count, sumCount:state.count*nameIdSum3[i].sum});
            console.log(state.afitsantName[state.index].mijozlar[idxTask], 'kerakkkk');
          }
        }
        state.inputTaskValue = "";
        state.count=1
        state.indexMijoz =idxTask
      },
      chekFunction: (state, action ) =>  {
        const idxTask = state.afitsantName[state.index].mijozlar.findIndex(
          (e) => e.orni === action.payload 
          )

      state.afitsantName[state.index].mijozlar[idxTask] = Object.assign(state.afitsantName[state.index].mijozlar[idxTask], {chek: true})
      console.log(state.afitsantName[state.index].mijozlar[state.indexMijoz], idxTask);
    },
      
    
    deleteTask: (state, action) => {
      const idxTask = state.afitsantName[state.index].mijozlar[state.indexMijoz].buyurtma.findIndex(
        (e) => e.id === action.payload 
      )
        state.afitsantName[state.index].mijozlar[state.indexMijoz].buyurtma.splice(idxTask, 1);
    },
    
   
    updateValue: (state, action) => {
      state.inputTaskValue = action.payload;
    }, 

    increment: (state, action ) => {
      state.count +=1
    },

    decrement: (state, action ) => {
      state.count > 1 ?state.count -=1: state.count=1
    },
      
     addMijozlar: (state, action ) => {
      const idxTask = state.afitsantName.findIndex(
        (task) => task.id === action.payload
      )
       state.countMijoz +=1
      state.afitsantName[idxTask].mijozlar.push({orni: state.countMijoz,  buyurtma: []})
      // state.afitsantName[idxTask].mijozlar.push(state.todos)
     },

     indexAfitsant: (state, action ) => {
      const idxTask = state.afitsantName.findIndex(
        (task) => task.id === action.payload
      )
      state.index = idxTask
      // console.log(state.index);
     },
     deleteMijoz: (state, action ) => {
      const idxTask = state.afitsantName[state.index].mijozlar.findIndex(
        (task) => task.orni === action.payload
      )

      const idxTask2 = state.afitsantName[state.index].mijozlar[state.indexMijoz].buyurtma.findIndex(
        (e) => e.id === action.payload
      ) 
      state.afitsantName[state.index].mijozlar.splice(idxTask, 1)
      console.log(state.index, idxTask, idxTask2);
     },

  }
});

export const {
  addTask,
  deleteTask,
  updateValue,
  editTask,
  editAddTask,
  increment,
  decrement,
  addMijozlar,
  indexAfitsant,
  deleteMijoz,
  chekFunction
} = todoSlice.actions;

export default todoSlice.reducer;
