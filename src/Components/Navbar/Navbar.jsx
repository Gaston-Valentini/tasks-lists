import { NavLink } from "react-router-dom";

import style from "./Navbar.module.css";

export default function Navbar({generalTasks, homeTasks, workTasks}) {
    return (
        <div className={style.navbar}>
            <div className={style.startContainer}>
                <NavLink to={"/"} className={style.start}>Start</NavLink>
            </div>
            <div className={style.linksContainer}>
                <NavLink to={"/general"} className={style.link}>General Tasks: {generalTasks.length}</NavLink>
                <NavLink to={"/home"} className={style.link}>Home Tasks: {homeTasks.length}</NavLink>
                <NavLink to={"/work"} className={style.link}>Work Tasks: {workTasks.length}</NavLink>
            </div>
        </div>
    )
}