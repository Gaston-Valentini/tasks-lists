import style from "../General/Tasks.module.css";

export default function Home(params) {
    const onRemove = (e) => {
        let newArr = [];
        params.homeTasks.map(task => {
            if (task.id !== e.target.id) {
                newArr.push(task)
            }
            return newArr;
        });
        params.setHomeTasks(newArr);
    }
    return (
        <>
            <p className={style.title}>Home Tasks</p>
            <ul className={style.list}>
                {params.homeTasks.map(task => (
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