import React, { useEffect, useRef, useState } from "react";
import styles from "./SingleTodo.module.scss";
import { Todo } from "../components/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const doneHandler = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editHandler = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className={styles.todo} onSubmit={(e) => editHandler(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className={styles.todoInput}
        />
      ) : todo.isDone ? (
        <s className={styles.todoText}>{todo.todo}</s>
      ) : (
        <span className={styles.todoText}>{todo.todo}</span>
      )}

      <div className={styles.todoIcons}>
        <span>
          <AiFillEdit
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          />
        </span>
        <span onClick={() => deleteHandler(todo.id)}>
          <AiFillDelete />
        </span>
        <span onClick={() => doneHandler(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
