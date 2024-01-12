import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="top-nav">Top Navigation</header>

      <div className="main-container">
        <aside className="product-container">Product description here</aside>

        <main className="visualizer-container">
          <div className="graph">Graph</div>
          <div className="table">Table</div>
        </main>
      </div>
    </div>
  );
}

export default App;
