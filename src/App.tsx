import "./App.css";
import { AppDispatch } from "./app/store";
import logo from "./assets/stackline_logo.svg";
import Line from "./components/LineLogo";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./features/product/productSlice";
import ProductTable from "./components/ProductTable";
import { useEffect } from "react";
import { RootState } from "./app/store";
import ProductOverview from "./components/ProductOverview";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.product.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className="app-container">
      <header className="top-nav">
        <div style={{ display: "flex", flexDirection: "column", width: 200, height: 50 }}>
          <img src={logo} style={{}} />
          <Line />
        </div>
      </header>

      <div className="main-container">
        <aside className="product-container">
          <ProductOverview />
        </aside>

        <main className="visualizer-container">
          <div className="graph">Graph</div>
          <div className="table">
            <ProductTable />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
