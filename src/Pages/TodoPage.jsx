import React, { useState } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";

const TodoPage = () => {

    const [todos, setTodos] = useState([]);
    const [inputval, setInputval] = useState("");

    // const handleChange = (e) => {
    //     const { value } = e.target;
    //     setInputval(value);
    // }

    const handleClick = () => {
        if (inputval !== "") {
            setTodos([...todos, inputval]);
            setInputval("");
        }
    }

    const handleDelete = (index) => {
        let filtodo = todos.filter((_, i) => i !== index);
        setTodos(filtodo);
    }

    // console.log(todos);


    return (
        <section className="sectiontodo">
            <div className="container">
                <div className="sectiontodo_box">
                    <h1 className="sectiontodo_h1">Todo List</h1>
                    <div className="flex">
                        <input type="text" className="form-control" value={inputval} onChange={(e) => setInputval(e.target.value)} />
                        <button type="button" className="btn addbtn" onClick={handleClick}>Add</button>
                    </div>
                    <ul className="todolist">
                        {
                            todos.map((ts, i) => (
                                <li className="todolist_li" key={ts}>
                                    <div className="flex">
                                        <div>
                                            <p className="todolist_content">{ts}</p>
                                        </div>
                                        <div>
                                            <button type="button" className="btn delbtn" onClick={() => handleDelete(i)}>
                                                <RiDeleteBin6Fill />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TodoPage;