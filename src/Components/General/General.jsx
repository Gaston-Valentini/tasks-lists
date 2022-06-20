import style from "./Tasks.module.css";

export default function General(params) {
    const onRemove = (e) => {
        let newArr = [];
        params.generalTasks.map(task => {
            if (task.id !== e.target.id) {
                newArr.push(task)
            }
            return newArr;
        });
        params.setGeneralTasks(newArr);
    }
    return (
        <>
            <p className={style.title}>General Tasks</p>
            <ul className={style.list}>
                {params.generalTasks.map(task => (
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