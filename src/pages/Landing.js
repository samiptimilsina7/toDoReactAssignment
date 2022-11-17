import { useState } from "react";

export const Landing=()=>{
    const [toDoList, setToDoList]=useState([]);
    const onAddToDo=(todo)=>{
        // console.log(todo);
        setToDoList([...toDoList,todo]);
    }
    return(
        <section className="todo-box">
            <Title/>
            <ToDoBody toDoList={toDoList}/>
            <ToDoTail onAddToDo={onAddToDo}/>
        </section>
    );
}

export function Title(){
    return(
            <div className="title">
                <h1>To Do List</h1>
            </div>
    );
}

export const ToDoBody=({toDoList})=>{
    console.log(toDoList);
    return(
        <div className="todo-body">
            <div className="todo-list">
                <div className="todo">
                    <div className="toDo">
                        {toDoList.map(toDo=><p>{toDo}</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const ToDoTail=({onAddToDo})=>{
    const [todo,setTodo]=useState('');
    const handleInput=(e)=>{
        setTodo(e.target.value);
    }
    const handleClick=()=>{
        onAddToDo(todo);
    }
    return(
        <div className="todo-tail">
            <input type="text" placeholder="Add new todo" name="add-todo" value={todo} onChange={handleInput}/>
            <button onClick={handleClick}>Add</button>
        </div>
    );

}