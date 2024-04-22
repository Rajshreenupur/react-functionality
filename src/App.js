import WeatherApp from "./WeatherApp";
import TodoList from "./TodoList";
import Quiz from "./Quiz";
import DraggNDrop from "./DND/DraggNDrop";
import SearchPage from "./recipe-finder/SearchPage"


function App() {
  return (
    <div className="App">
     <TodoList/>
     <WeatherApp/>
     <Quiz/>
     <SearchPage/>
     <DraggNDrop/>
    </div>
  );
}

export default App;
