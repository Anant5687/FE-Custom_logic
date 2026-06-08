import "./App.css";
import AutoComplete from "./components/AutoComplete";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  return (
    <div style={{ padding: "4px" }}>
      <AutoComplete />
      <InfiniteScroll />
    </div>
  );
}

export default App;
