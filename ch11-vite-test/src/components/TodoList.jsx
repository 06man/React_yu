import TodoListItem from './TodoListItem';
import './TodoList.scss';
// 추가 1-1 , onRemove
// 추가 2-1 , onToggle
const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id}
                    // 추가 1-2 , onRemove
                    // 추가 2-2 , onToggle
                    onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default TodoList;