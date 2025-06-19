// 21 --> VERIFICHIAMO LE NOSTRE CHIAMATE DI USEEFFECT PER LEGGERE LE TASKS E IMPORTIAMO USECONTEXT CHE E' IL NOSTORN HOOK (MILESTONE 2)
import { useContext } from "react";
// 22 --> VERIFICHIAMO LE NOSTRE CHIAMATE DI USEEFFECT PER LEGGERE LE TASKS E IMPORTIAMO GLOBALCONTEXT (MILESTONE 2)
import { GlobalContext } from "../context/GlobalContext";
// 27 --> IMPORTO TASKROW (MILESTONE 3)
import TaskRow from "../components/TaskRow";

// 5 --> FARE L'EXPORT E LA FUNZIONE DI DEFAULT INIZIALE (MILESTONE 1)
function TaskList() {

    // 23 --> QUI RACCOGLIAMO LA NOSTRA VALUE CHE AL SUO INTERNO TROVIAMO TASTK E SETTASKS, ANDIAMO A DESTRUTTURARE E VEDERE SE FUNZIONANO (MILESTONE 2)
    const {tasks} = useContext(GlobalContext);
    console.log('Tasks:', tasks);

    return (
        <div>
            <h1>Lista dei task</h1>
            {/* 24 --> STRUTTURARE TASKLIST.JSX COME UNA TABELLA, CON IL NOME, STATO E LA DATA DI CREAZIONE (MILESTONE 3) */}
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Data di Creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 26 --> FARE UN MAP PER OGNI TASK, PERCHE' PER OGNI TASK DEVO CREARE UN TASKROW A CUI PASSO LA TASK IN QUESTIONE (MILESTONE 3) */}
                    {tasks.map(task => (
                        <TaskRow key={task.id} task={task}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList;