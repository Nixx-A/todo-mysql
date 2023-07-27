import { AiFillCloseCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useTodo } from "../context/todoContext";
import { useState } from "react";
import Modal from "./Modal";

export default function TodoCard ({ todo }) {
  const { deleteTodo, updateTodo } = useTodo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...todo });

  const handleDelete = () => deleteTodo(todo.id);
  const handleEdit = () => setIsModalOpen(true);
  const handleSave = () => {
    updateTodo(todo.id, editedTodo);
    setIsModalOpen(false);
  }
  
  const handleCancel = () => {
    setIsModalOpen(false);
    setEditedTodo({ ...todo });
  };

  const getStatusEmoji = () => {
    if (todo.status === "Todo") {
      return "📝";
    } else if (todo.status === "Done") {
      return "✅";
    } else if (todo.status === "In Progress") {
      return "⏳";
    } else {
      return "";
    }
  };

  return (
    <div className="w-5/6 m-auto h-20 bg-tertiary-400 rounded p-1 mb-2 flex justify-between overflow-clip">
      <div>
        <h1 className="font-semibold">{todo.title}</h1>
        <p className="text-sm">{todo.description}</p>
        <p className="text-sm font-light">
          {todo.status} {getStatusEmoji()}
        </p>
      </div>
      <div className="flex">
        <AiFillDelete
          className="cursor-pointer m-1"
          onClick={handleDelete}
        />
        <AiFillEdit className="cursor-pointer m-1" onClick={handleEdit} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onSave={handleSave}
        onCancel={handleCancel}
      >
        <div className="p-4">
          <AiFillCloseCircle className="text-xl cursor-pointer" onClick={handleCancel} />
          <h1 className="text-lg font-semibold mb-2">Edit Todo</h1>
          <label className="block mb-2">
            Title:
            <input
              type="text"
              value={editedTodo.title}
              onChange={(e) =>
                setEditedTodo({ ...editedTodo, title: e.target.value })
              }
              className="block w-full border border-gray-300 rounded px-2 py-1"
            />
          </label>
          <label className="block mb-2">
            Description:
            <textarea
              value={editedTodo.description}
              onChange={(e) =>
                setEditedTodo({ ...editedTodo, description: e.target.value })
              }
              className="block w-full border border-gray-300 rounded px-2 py-1"
            />
          </label>
          <label className="block mb-2">
            Status:
            <select
              value={editedTodo.status}
              onChange={(e) =>
                setEditedTodo({ ...editedTodo, status: e.target.value })
              }
              className="block w-full border border-gray-300 rounded px-2 py-1"
            >
              <option value="Todo">Todo</option>
              <option value="Done">Done</option>
              <option value="In Progress">In Progress</option>
            </select>
          </label>
          <button
            onClick={handleSave}
            className="bg-primary-500 text-primary-50 hover:bg-primary-600 text-white duration-150 rounded px-2 py-1"
          >
            Submit
          </button>
        </div>
      </Modal>
    </div>
  )
}
