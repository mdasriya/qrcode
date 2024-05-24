// src/App.js

import './App.css';
import QRCode from "react-qr-code";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './ProductPage';

function App() {
  const productUrl = "http://localhost:3000/product?name=DummyProduct&description=This%20is%20a%20dummy%20product%20description.";

  return (
    <Router>
      <div className="App">
        <QRCode value={productUrl} />
        <Routes>
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
