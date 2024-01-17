import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductTable from "./components/ProductTable";
import ProductOverview from "./components/ProductOverview";
import Logo from "./components/Logo";

import { AppDispatch } from "./app/store";
import { RootState } from "./app/store";
import { fetchProducts } from "./features/product/productSlice";

import "./App.css";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.product.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "failed") {
    return <div>Failed to fetch product...</div>;
  }
  return (
    <div className="app-container">
      <header className="top-nav">
        <Logo />
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
