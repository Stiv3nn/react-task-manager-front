// 81 --> IMPORTO USESTATE E USSEREF (MILESTONE 10)
import { useState, useRef } from "react";
// 82 --> IMPORTO ANCHE LA MODALE DAL COMPONENTE CHE ABBIAMO CREATO (MILESOTNE 10)
import Modal from './Modal';
import { Form } from "react-router-dom";


// 80 --> CREAZIONE DEL COMPONENTE E DELLA FUNZIONE EDITTASKMODAL.JSX, ACCETTANDO I SEGUENTI PROPS (MILESTONE 10)
function EditTaskModal({ show, onClose, task, onSave, }) {

    // 83 --> CREAZIONE DELLO STATO (MILESTONE 10)
    const [editedTask, setEditedTask] = useState(task);

    // 84 --> LO STATO EDITEDTASK LO ANDIMAO A MODIFICARE (MILESTONE 10)
    const changedEditedTask = (key, event) => {
        setEditedTask(prev => ({ ...prev, [key]: event.target.value }));
    }

    // 86 --> DESTRUTTURARE LE PROPRIETA' CHE CI SERVONO (MILESTONE 10)
    const { title, description, status } = editedTask;

    // 87 --> AL ONCONFIRM DOBBIAMO FARE UN SUBMIT DEL FORM CREATO PER POI INSERIRLO NEL FORM (MILESTONE 10)
    const editFormRef = useRef();

    // 88 --> CREAZIONE DELLA FUNZIONE DI HANDLESUBMIT DEL FORM (MILESTONE 10)
    const handleSubmit = e => {
        e.preventDefault();
        onSave(editedTask);
    }

    return (
        // 85 --> RITORNO LA MODALE CON I VARI PARAMETRI ASSEGNATI DALL'ESERCIZIO (MILESTONE 10)
        <Modal
            title="Modifica task"
            content={
                <form ref={editFormRef} onSubmit={handleSubmit}>
                    <label>
                        Nome Task:
                        <input
                            type="text"
                            value={title}
                            onChange={e => changedEditedTask('title', e)}
                        />
                    </label>

                    <label>
                        Descrizione:
                        <textarea
                            value={description}
                            onChange={e => changedEditedTask('description', e)}
                        />
                    </label>

                    <label>
                        Stato:
                        <select
                            value={status}
                            onChange={e => changedEditedTask('status', e)}
                        >
                            {["To do", "Doing", "Done"].map((value, index) => (
                                <option key={index} value={value}>{value}</option>
                            ))}
                        </select>
                    </label>
                </form>
            }
            confirmText="Salva"
            show={show}
            onClose={onClose}
            onConfirm={() => editFormRef.current.requestSubmit}
        />
    )
}

export default EditTaskModal;