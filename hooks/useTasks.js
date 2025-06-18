// 30 --> STATO E USEEFFETCT COPIATO DA GLOBLACONTEXT (MILESTONE 4)
import { useEffect, useState } from "react";
const { VITE_API_URL } = import.meta.env;

// 31 --> CREAZIONE DELLA FUNZIONE USETASKS CON ALL'INTERNO L'USEEFFECT COPIATO DA GLOBALCONTEXT (MILESTONE 4)
function useTasks() {

    // 30 --> STATO E USEEFFETCT COPIATO DA GLOBLACONTEXT (MILESTONE 4)
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${VITE_API_URL}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err))
    }, []);

    // 32 --> CREAZIONE DELLA FUNZIONE ADDTASK, CHE PRENDERA' UNA NUOVA TASK DA CREARE (MILESTONE 4)    
    const addTask = (newTask) => {
        // EFFETTUARE LE OPERAZIONI
    }

    // 33 --> CREAZIONE DELLA FUNZIONE REMOVETASK, CHE BASTERA' UN TASKID PER CAPIRE COSA FARE (MILESTONE 4)
    const removeTask = (taskId) => {
        // EFFETTUARE LE OPERAZIONI
    }

    // 34 --> CREAZIONE DELLA FUNZIONE UPDATETASK, A CUI PASSEREMO UPDATEDTASK (MILESTONE 4)
    const updateTask = (updateTask) => {
        // EFFETTUARE LE OPERAZIONI
    }

    return { tasks, addTask, removeTask, updateTask };
}


export default useTasks;