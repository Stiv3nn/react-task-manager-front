// 21 --> VERIFICHIAMO LE NOSTRE CHIAMATE DI USEEFFECT PER LEGGERE LE TASKS E IMPORTIAMO USECONTEXT CHE E' IL NOSTORN HOOK (MILESTONE 2)
import { useContext } from "react";
// 22 --> VERIFICHIAMO LE NOSTRE CHIAMATE DI USEEFFECT PER LEGGERE LE TASKS E IMPORTIAMO GLOBALCONTEXT (MILESTONE 2)
import { GlobalContext } from "../../context/GlobalContext";



// 5 --> FARE L'EXPORT E LA FUNZIONE DI DEFAULT INIZIALE (MILESTONE 1)
function TaskList() {

    // 23 --> QUI RACCOGLIAMO LA NOSTRA VALUE CHE AL SUO INTERNO TROVIAMO TASTK E SETTASKS, ANDIAMO A DESTRUTTURARE E VEDERE SE FUNZIONANO (MILESTONE 2)
    const {tasks} = useContext(GlobalContext);
    console.log('Tasks:', tasks);

    return (
        <div>
            <h1>Lista dei task</h1>
            <p>Qui verrano mostrati le task....</p>
        </div>
    )
}

export default TaskList;