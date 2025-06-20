// 58 --> IMPORTO USEPARAMS e USECONTEXT e GLOBALCONTEXT PER VEDERE IN QUALE TASK CI TROVIAMO (MILESTONE 7)
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
// 75 --> IMPORTO LA MODALE CREATA (MIELSTONE 9)
import Modal from "../components/Modal";
// 91 --> IMPORTIAMO EDITTASKMODAL
import EditTaskModal from "../components/EditTaskModal";

// 55 --> CREAZIONE DELLA PAGINA TASKDETAIL PER L'INSERIMENTO DELLA NUOVA ROTTA DEI LINK (MILESTONE 7)
function TaskDetail() {
    // 59 --> RACCOGLIAMO L'ID (MILESTONE 7)
    const { id } = useParams();
    // 67 --> INIZIALIZZIAMO USENAVIGATE (MILESTONE 8)
    const navigate = useNavigate();
    // 60 --> PRENDERE TUTTE LE TASK (MILESTONE 7)
    // 68 --> DESTRUTTURO ANCHE REMOVOMETASK E NON SOLO (MILESTONE 8)
    const { tasks, removeTask, updateTask } = useContext(GlobalContext);
    // 61 --> RACCOGLIERE LA SINGOLA TASKS (MILESTONE 7)
    const task = tasks.find(t => t.id === parseInt(id));
    // 62 --> SE NON TROVO NESSUNA TASK, VUOL DIRE CHE L'UTENTE HA SCRITTO MANUALMENTE L'INDIRIZZO CHE RAPPRESENTA UN ID CHE NON ESISTE (MILESTONE 7)
    if (!task) {
        return (
            <h2>Nessuna task trovata</h2>
        )
    }

    // 76 --> CREAZIONE DELLO STATO SHOW E SETSHOW (MILESTONE 9)
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    // 90 --> CREAZIONE DELLO STATO PER IL BUTTON MODIFICA TASK (MILESTONE 10)
    const [showEditModal, setShowEditModal] = useState(false);

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

    // 93 --> CREAZIONE DELLA HANDLEUPDATE PER LA MODALE DI MODIFICA TASK ONSAVE (MILESTONE 10)
    const handleUpdate = async updateTask => {
         try {
            await updateTask(updateTask);
            setShowEditModal(false)
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
            {/* <button onClick={handleDelete}>Elimina Task</button> */}
            {/* 77 --> NON ANDIAMO A FARE PIU' HANDLEDELETE MA SETSHOWDELETEMODAL (MIELSTONE 9) */}
            <button onClick={() => setShowDeleteModal(true)}>Elimina Task</button>
            {/* 89 --> CREAIZIONE DEL BUTTON MODIFICA (MILESTONE 10)*/}
            <button onClick={() => setShowEditModal(true)}>Modifica Task</button>
            {/* 78 --> CREAZIONE DELLA NOSTRA MODALE DI CONFERMA ELIMINAZIONE (MILESTONE 9) */}
            <Modal
                title="Conferma Eliminazione"
                content={<p>Sei sicuro di eliminare questa task</p>}
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
                confirmText="Elimina"
            />

            {/* 92 --> CREAZIONE DELLA MODALE DI MODIFICA TASK (MILESTONE 10) */}
             <EditTaskModal
                task={task}
                show={showEditModal}
                onClose={() => setShowEditModal(false)}
                onSave={handleUpdate}
            />
        </div>
    )
}


export default TaskDetail;