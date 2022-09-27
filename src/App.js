import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterData from './components/RegisterData';
import ListData from './components/ListData';
import NotFound from "./components/NotFound";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={`test/`} element={<ListData />} />
        <Route path="test/list" element={<ListData />} />
        <Route path={`test/add`} element={<RegisterData />} />
        <Route path={`test/*/`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;