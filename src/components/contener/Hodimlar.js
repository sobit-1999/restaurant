import React from 'react'
import { useSelector} from "react-redux";


export default function Hodimlar({name}) {
    const taomTuri = name.taomlar.map(item => {return item.turi})
    const taomTuriAll = taomTuri.length>1 ? [...taomTuri[0], ...taomTuri[1]]:[...taomTuri[0]]
    
    const todos = useSelector((state) => state.todo.todos);
    const oshpazArr = []

for (let i = 0; i < taomTuriAll.length; i++) {
    for (let j = 0; j < todos.length; j++) {
        if (taomTuriAll[i].id ===todos[j].id) {
            oshpazArr.push(todos[j])
        }   
    }
}

  return (
    <div>
        {name.name}
        {oshpazArr.map(item => {return <h3>{item.label} {item.sum} {item.count} ta</h3>})}

    </div>
  )
}
