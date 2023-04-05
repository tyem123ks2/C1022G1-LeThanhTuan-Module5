import React, {useEffect, useState} from "react";
import * as todoService from "../service/TodoService";

function TodoList() {
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await todoService.findAll();
            setTodoList(result);
        };
        fetchAPI();
    }, []);
    return (
        <>
            <ul>
                {
                    todoList.map((todo) => {
                        return <li key={todo.id}>{todo.title}</li>;
                        }
                    )
                }
            </ul>
        </>
    );
}

export default TodoList;