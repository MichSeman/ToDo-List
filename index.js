const { values, divide } = require("lodash");

function App() {
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false,
        },
        {
            text: 'meet friend for lunch',
            isCompleted: false,
        },
        {
            text: 'build todo app',
            isCompleted: false,
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text: text, isCompleted: false }];
        setTodos(newTodos);
    }

    const removerTodo = index => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temps);
    }
    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, i) => {
                    <ToDo index={i} key={i} todo={todo} remove={removeToDo} /> ))}
                <ToDoForm addTodo={addTodo} />
            </div>
        </div >
    );

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

