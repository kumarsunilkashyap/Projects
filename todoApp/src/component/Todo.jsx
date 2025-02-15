import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index]);
  };

  const saveEdit = () => {
    const updatedTodos = todos.map((todo, index) =>
      index === editingIndex ? editingText : todo
    );
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 flex-grow rounded-l-lg"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-lg"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    className="border p-2 flex-grow rounded-l-lg"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button
                    className="bg-green-800 text-white p-2 rounded-r-lg"
                    onClick={saveEdit}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>{todo}</span>
                  <div>
                    <button
                      className="bg-yellow-500 text-white p-2 rounded-lg mr-2"
                      onClick={() => editTodo(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white p-2 rounded-lg"
                      onClick={() => deleteTodo(index)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
