import "./App.css";
import { Plus, X, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import ButtonFilter from "./componnents/composants/ButtonFilter";
import InputBox from "./componnents/composants/InputBox";
import ShowTodo from "./componnents/ShowTodo";
import FilterTodo from "./componnents/composants/ButtonFilter";

function App() {
  {
    /* logique to show todos*/
  }
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  {
    /* gere la logique du checkbox button */
  }
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  {
    /*gere la suppression de la todo*/
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  {
    /*gere conversion de notre todos en text pour la sauvegarde*/
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  {
    /* gere la suppression de tous les todos*/
  }

  const clearTodos = () => {
    setTodos([]);
  };

  {
    /*gere le filtrage des todos*/
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  {
    /*ajout de theme dark and light*/
  }
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 transition bg-white text-black dark:bg-gray-900 dark:text-white">
        <div className="w-full flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full border flex items-center justify-center bg-white dark:bg-gray-800 dark:border-gray-600 transition"
          >
            <span className="text-xl">{darkMode ? "☀️" : "🌙"}</span>
          </button>
        </div>
        <div className="flex flex-col gap-10 items-center justify-center p-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className={`w-10 h-10 rounded-full  flex items-center justify-center transition
              ${showForm ? "bg-orange-400" : "bg-orange-400 hover:bg-orange-500"}`}
          >
            <span className="text-white text-2xl  font-bold">
              {" "}
              {showForm ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Plus className="w-5 h-5 text-white" />
              )}
            </span>
          </button>
          {showForm && <InputBox addTodo={addTodo} />}
        </div>
        <div className="flex  gap-4">
          <div className="flex gap-4 mt-4">
            <ButtonFilter
              label="All Todos"
              value="all"
              filter={filter}
              setFilter={setFilter}
            />

            <ButtonFilter
              label="Active"
              value="active"
              filter={filter}
              setFilter={setFilter}
            />

            <ButtonFilter
              label="Completed"
              value="completed"
              filter={filter}
              setFilter={setFilter}
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {filteredTodos.map((todo) => (
            <ShowTodo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={clearTodos}
            className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center hover:bg-orange-500 transition"
          >
            <Trash2 className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
