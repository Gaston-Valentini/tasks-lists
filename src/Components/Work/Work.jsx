import style from "../General/Tasks.module.css";

export default function Work(params) {
    const onRemove = (e) => {
        let newArr = [];
        params.workTasks.map(task => {
            if (task.id !== e.target.id) {
                newArr.push(task)
            }
            return newArr;
        });
        params.setWorkTasks(newArr);
    }
    return (
        <>
            <p className={style.title}>Work Tasks</p>
            <ul className={style.list}>
                {params.workTasks.map(task => (
                    <li className={style.listTask}>
                        <button onClick={onRemove} id={task.id}>X</button>
                        <p>{task.title}</p>
                        <p>{task.date}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}