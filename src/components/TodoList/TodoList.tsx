import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};
export const TodoList: React.FC<Props> = ({ todos }) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    {todos.map(todo => (
      <tbody key={todo.id}>
        <tr data-cy="todo" className="">
          <td className="is-vcentered">{todo.id}</td>
          <td className="is-vcentered" />
          <td className="is-vcentered is-expanded">
            <p
              className={
                todo.completed ? `has-text-success` : 'has-text-danger'
              }
            >
              {todo.title}
            </p>
          </td>
          <td className="has-text-right is-vcentered">
            <button data-cy="selectButton" className="button" type="button">
              <span className="icon">
                <i className="far fa-eye" />
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    ))}
  </table>
);

// fa-eye-slash
