import style from "./Insert.module.css";

export default function Insert(props) {
    
    let onAdd = (e) => {

        e.preventDefault();
        let title = document.querySelector("#title");
        let date = document.querySelector("#date");
        let type = document.querySelector("#type");

        switch (type.value) {
            case "General":
                props.setGeneralTasks(props.generalTasks.concat({
                    id: (Math.random() * 100).toString(36).slice(3),
                    title: title.value,
                    date: date.value
                }));
                break;
            case "Home":
                props.setHomeTasks(props.homeTasks.concat({
                    id: (Math.random() * 100).toString(36).slice(3),
                    title: title.value,
                    date: date.value
                }));
                break;
            case "Work":
                props.setWorkTasks(props.workTasks.concat({
                    id: (Math.random() * 100).toString(36).slice(3),
                    title: title.value,
                    date: date.value
                }));
                break;
            default:
                break;
        }
    }

    const onReset = (e) => {

        e.preventDefault();
        let title = document.querySelector("#title");
        let date = document.querySelector("#date");
        let type = document.querySelector("#type");
        let reset = window.confirm("¿Está seguro que desea eliminar todas las listas?");
        
        if(reset === true){
            props.setGeneralTasks([]);
            props.setHomeTasks([]);
            props.setWorkTasks([]);
            title.value = "";
            date.value = "";
            type.value = "Type of Task";
        }
    }

    return (
        <form className={style.insert}>
            <input type={"text"} placeholder={"Title"} maxLength={15} id={"title"} className={style.title}></input>
            <input type={"date"} id={"date"} className={style.date}></input>
            <select id={"type"} className={style.type}>
                <option hidden>Type of Task</option>
                <option className={style.typeOption}>General</option>
                <option className={style.typeOption}>Home</option>
                <option className={style.typeOption}>Work</option>
            </select>
            <button onClick={onAdd} className={style.add}>Add</button>
            <button onClick={onReset} className={style.reset}>RESET</button>
        </form>
    )
}