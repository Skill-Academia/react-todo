import { useState } from "react";
import "./todo.css";

function Todo() {
    const [userInput, setUserInput] = useState("");
    const [list, setList] = useState([]);

    const updateInput = (value) => {
        setUserInput(value);
    };

    const addItem = () => {
        if (userInput !== "") {
            const newItem = {
                id: Math.random(),
                value: userInput,
            };

            setList([...list, newItem]);
            setUserInput("");
        }
    };

    const deleteItem = (id) => {
        const updatedList = list.filter(item => item.id !== id);
        setList(updatedList);
    };

    const editItem = (index) => {
        const todos = [...list];
        const editedTodo = prompt('Edit the todo:');
        if (editedTodo !== null && editedTodo.trim() !== '') {
            todos[index].value = editedTodo;
            setList(todos);
        }
    };

    return (
        <div className="container">
            <div className="title">TODO LIST</div>
            <div className="input-section">
                <input
                    className="input-field"
                    placeholder="Add item..."
                    value={userInput}
                    onChange={(e) => updateInput(e.target.value)}
                />
                <button className="add-btn" onClick={addItem}>ADD</button>
            </div>
            <div className="list-section">
                {list.map((item, index) => (
                    <div key={index} className="list-item">
                        {item.value}
                        <span>
                            <button onClick={() => deleteItem(item.id)}>Delete</button>
                            <button onClick={() => editItem(index)}>Edit</button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;

