import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "./components/Registro";
import Login from "./components/Login";
import Home from "./components/Home";
import Replies from "./components/Replies";

function App() {
  return (
    <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/registro' element={<Registro />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/:id/replies' element={<Replies />} />
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
