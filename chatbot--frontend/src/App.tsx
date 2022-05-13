import React from 'react';
import styled from "styled-components";
import {BrowserRouter, Outlet, Route, Routes,} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Frontpage from "./pages/Frontpage";
import AdminPanel from "./pages/AdminPanel";
import DefaultLayout from "./layouts/DefaultLayout";
import "./styles/App.css";

const AppLayout = () => <DefaultLayout> <Outlet/> </DefaultLayout>

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<Frontpage/>}/>
                    <Route path="admin" element={<AdminPanel/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const Application = styled.div`
  height: 100vh;
  width: 100vw;
`

export default App;
