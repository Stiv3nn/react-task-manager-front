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
    // 48 --> RENDERE QUESTA FUNZIONE ASINCRONA (MILESTONE 6)
    const addTask = async newTask => {
        // EFFETTUARE LE OPERAZIONI
        const response = await fetch(`${VITE_API_URL}/tasks`, {
            method: 'POST',
            headers: { "Content-Type:": "application/json" },
            body: JSON.stringify(newTask)
        });
        const { success, message, task } = await response.json();
        // CONTROLLO SE SUCCESS E' FALSE, E SE E' FALSE LANCIO IL MIO ERRORE 
        if (!success) throw new Error(message);
        // INVECE SE VA A BUON FINE LANCIO LA MIA TASK
        setTasks(prev => [...prev, task]);
    }

    // 33 --> CREAZIONE DELLA FUNZIONE REMOVETASK, CHE BASTERA' UN TASKID PER CAPIRE COSA FARE (MILESTONE 4)
    // 65 --> RENDERE QUESTA FUNZIONE ASINCRONA (MILESTONE 8)
    const removeTask = async taskId => {
        // EFFETTUARE LE OPERAZIONI
        const response = await fetch(`${VITE_API_URL}/tasks/${taskId}`, {
            method: 'DELETE'
        });
        const { success, message } = await response.json();
        // CONTROLLO SE SUCCESS E' FALSE, E SE E' FALSE LANCIO IL MIO ERRORE 
        if (!success) throw new Error(message);
        // 66 --> ALTRIMENTI VADSO A TOGLIERE LA TASK CHE E' STATA APPENA ELIMINATA, E' COME SI IN UN STATE A TOLGLIERE UN ELEMENTO DI UN ARRAY --> USANDO IL FILTER (MILESOTNE 8)
        setTasks(prev => prev.filter(t => t.id !== taskId));
    }

    // 34 --> CREAZIONE DELLA FUNZIONE UPDATETASK, A CUI PASSEREMO UPDATEDTASK (MILESTONE 4)
    const updateTask = (updateTask) => {
        // EFFETTUARE LE OPERAZIONI
    }

    return { tasks, addTask, removeTask, updateTask };
}


export default useTasks;