import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterData from './components/RegisterData';
import ListData from './components/ListData';
import NotFound from "./components/NotFound";
import Delete from './components/Delete';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<ListData />} />
        <Route path="/list" element={<ListData />} />
        <Route path={`/add`} element={<RegisterData />} />
        <Route path={`/*/`} element={<NotFound />} />
        <Route path={`/delete`} element={<Delete />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;