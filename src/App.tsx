import "./App.css";
import { store } from "./app/store";
import logo from "./assets/stackline_logo.svg";
import Line from "./components/LineLogo";
import { Provider } from "react-redux";
import { fetchProducts } from "./features/product/productSlice";

function App() {
  store.dispatch(fetchProducts());
  return (
    <Provider store={store}>
      <div className="app-container">
        <header className="top-nav">
          <div style={{ display: "flex", flexDirection: "column", width: 200, height: 50 }}>
            <img src={logo} style={{}} />
            <Line />
          </div>
        </header>

        <div className="main-container">
          <aside className="product-container">Product description here</aside>

          <main className="visualizer-container">
            <div className="graph">Graph</div>
            <div className="table">Table</div>
          </main>
        </div>
      </div>
    </Provider>
  );
}

export default App;
