import style from "./Start.module.css";

export default function Start() {
    return (
        <div className={style.start}>
            <h1 className={style.startTitle}>Lista de tareas</h1>
            <div className={style.startContent}>
                <img src="https://www.gen-it.com.ar/sites/default/files/2019-04/20170420_React_logo_wordmark.png" alt="react-logo"/>
                La siguiente aplicación consiste en tres listas diferentes a las que se puede navegar, mediante la barra
                de navegación, y se les puede agregar tareas con título y fecha a cada una mediante el formulario. 
                Adicionalmente es posible eiminar las tareas una por una, o bien reiniciando mediante el botón de "RESET".
                <br/>Esta aplicación está diseñada con react, con el fin de lograr una web SPA, y se pueden observar 
                el manejo de componentes funcionales, el pasaje de propiedades a los mismos, el manejo 
                de estados mediante el hook "useState", el enrutamiento con la librería "react-router-dom" y el estilizado 
                con CSS mediante "module.css".
            </div>
            <p className={style.linkProfile}>Desarrollado por <a href="https://github.com/Gaston-Valentini" target={"_blank"} rel="noreferrer">Gastón Valentini</a></p>
            <p className={style.linkProyect}><a href="https://github.com/Gaston-Valentini/tasks-lists">Clickee en este enlace para ir al repositorio de GitHub de este proyecto</a></p>
        </div>
    )
}