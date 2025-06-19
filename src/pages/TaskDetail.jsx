// 58 --> IMPORTO USEPARAMS e USECONTEXT e GLOBALCONTEXT PER VEDERE IN QUALE TASK CI TROVIAMO (MILESTONE 7)
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

// 55 --> CREAZIONE DELLA PAGINA TASKDETAIL PER L'INSERIMENTO DELLA NUOVA ROTTA DEI LINK (MILESTONE 7)
function TaskDetail() {
    // 59 --> RACCOGLIAMO L'ID (MILESTONE 7)
    const { id } = useParams();
    // 67 --> INIZIALIZZIAMO USENAVIGATE (MILESTONE 8)
    const navigate = useNavigate();
    // 60 --> PRENDERE TUTTE LE TASK (MILESTONE 7)
    // 68 --> DESTRUTTURO ANCHE REMOVOMETASK (MILESTONE 8)
    const { tasks, removeTask } = useContext(GlobalContext);
    // 61 --> RACCOGLIERE LA SINGOLA TASKS (MILESTONE 7)
    const task = tasks.find(t => t.id === parseInt(id));
    // 62 --> SE NON TROVO NESSUNA TASK, VUOL DIRE CHE L'UTENTE HA SCRITTO MANUALMENTE L'INDIRIZZO CHE RAPPRESENTA UN ID CHE NON ESISTE (MILESTONE 7)
    if (!task) {
        return (
            <h2>Nessuna task trovata</h2>
        )
    }

    // 64 --> CREAZIONE DELLA FUNZIONE PER ELEMINARE UNA TASK "HANDLEDELETE" (MILESTONE 7)
    // 70 --> QUESTA FUNZIONE DEV'ESSERE ASINCRONA (MILESTONE 8)
    const handleDelete = async () => {
        // 69 --> INSERIMENTO DI UN TRY E CATCH PER L'ERRORE (MILESTONE 8)
        try {
            await removeTask(task.id);
            alert("Task eliminata con successo!");
            navigate("/");
        } catch (error) {
            console.log(error);
            alert(error.message);
            
        }
    }
    
    return (
        // 63 --> RITORNO I DETTAGLI DELLE TASK AL CLICK (MILESTONE 7)
        <div>
            <h1>Dettaglio Task</h1>
            <p><strong>Nome:</strong> {task.title}</p>
            <p><strong>Descrizione:</strong> {task.description}</p>
            <p><strong>Stato:</strong> {task.status}</p>
            <p><strong>Data di Creazione:</strong> {new Date(task.createdAt).toLocaleString()}</p>
            <button onClick={handleDelete}>Elimina Task</button>
        </div>
    )
}


export default TaskDetail;