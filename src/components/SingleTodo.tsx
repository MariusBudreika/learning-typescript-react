import React from "react";
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
  return (
    <form className={styles.todo}>
      <span className={styles.todoText}>{todo.todo}</span>
      <div className={styles.todoIcons}>
        <span>
          <AiFillEdit />
        </span>
        <span>
          <AiFillDelete />
        </span>
        <span>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
