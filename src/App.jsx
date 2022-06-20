import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import style from "./App.module.css";

import Navbar from "./Components/Navbar/Navbar";
import Insert from "./Components/Insert/Insert";
import General from "./Components/General/General";
import Home from "./Components/Home/Home";
import Work from "./Components/Work/Work";
import Start from "./Components/Start/Start";

export default function App() {
    const [generalTasks, setGeneralTasks] = useState([]);
    const [homeTasks, setHomeTasks] = useState([]);
    const [workTasks, setWorkTasks] = useState([]);
    return (
        <div className={style.app}>
            <Router>
                <Navbar
                    generalTasks={generalTasks}
                    homeTasks={homeTasks}
                    workTasks={workTasks}
                />
                <Insert
                    generalTasks={generalTasks}
                    homeTasks={homeTasks}
                    workTasks={workTasks}
                    setGeneralTasks={setGeneralTasks}
                    setHomeTasks={setHomeTasks}
                    setWorkTasks={setWorkTasks}
                />
                <Routes>
                    <Route path="/" element={<Start/>}/>
                    <Route path="/general" element={
                        <General
                            generalTasks={generalTasks}
                            setGeneralTasks={setGeneralTasks}
                        />}
                    />
                    <Route path="/home" element={
                        <Home
                            homeTasks={homeTasks}
                            setHomeTasks={setHomeTasks}
                        />}
                    />
                    <Route path="/work" element={
                        <Work
                            workTasks={workTasks}
                            setWorkTasks={setWorkTasks}
                        />}
                    />
                    <Route path="*" element={<h1>Error 404: Not Found</h1>}/>
                </Routes>
            </Router>
        </div>
    )
}