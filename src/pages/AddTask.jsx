// 37 --> IMPORTO USESTATE E USEREF PER GLI INPUT CONTROLLATI E NON CONTROLLATI (MILESTONE 5)
import { useState, useRef, useMemo } from "react";

// 40 --> VALIDAZIONE DEL NOME (MILESOTNE 5)
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`";

// 6 --> FARE L'EXPORT E LA FUNZIONE DI DEFAULT INIZIALE (MILESTONE 1)
function AddTask() {

    // 38 --> PREPARIAMO I NOSTRI STATI E RIFERIMENTI (MILESOTNE 5)
    const [taskTitle, setTaskTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef();

    // 41 --> CONTROLLARE SE C'E' UN ERRORE OPPURE NO E FARE UN USEEFFECT CHE VA A CONTROLLARE OGNI VOLTA CHE UN TASKTITLE E ANDARE A MANIPOLARE ANCORA UN'ALTRO STATO CHIAMANDOLO TIPO ERRORMESSAGE --> MA QUESTO E' UN VECCHIO METODO CHE UTILIZZAVAMO E QUINDI USEREMO USEMEMO() (MILESTOENE 5)
    const taskTitleError = useMemo(() => {
        // IL CAMPO NON PUO0 ESSER VUOTO (MILESOTNE 5)
        if (!taskTitle.trim())
            return "Il nome della task non può esere vuoto."
        // NON PUO' CONTENERE SIMBOLI SPECIALI (MILESTONE 5)
        if ([...taskTitle].some(char => symbols.includes(char)))
            return "Il nome della task non può contenere simboli."
        return "";
    }, [taskTitle]);

    // 45 --> FUNZIONE DEL HANDLESUBMIT DEL FORM (MILESTONE 5)
    const handleSubmit = event => {
        event.preventDefault();
        if (taskTitleError)
            return;
        // 46 --> CREAZIONE DELLA NUOVA TASK (MILESTONE 5)
        const newTask = {
            title: taskTitleError.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value
        }

        // 47 --> STAMAPRELO IN CONSOLE (MILESTONE 5)
        console.log('Task da aggiungere:', newTask);
    }


    return (
        <div>
            <h1>Aggiungi una task</h1>

            {/* 39 --> CREAZIONE DEL FORM (MILESTONE 5) */}
            {/* 44 --> FARE ONSUBMIT AL FORM COSI SI STAMPA IN CONSOLE CIO' CHE INVI TRAMITE LA FUNZIONE HANDLESUBMIT (MILESTONE 5) */}
            <form onSubmit={handleSubmit}>

                <label>
                    Nome Task:
                    <input
                        type="text"
                        value={taskTitle}
                        onChange={e => setTaskTitle(e.target.value)}
                    />
                </label>
                {/* 42 --> MESSAGGIO DI ERRORE QUANDO IL NOME DELLA TASK RIMANE VUOTA (MILESTONE 5) */}
                {taskTitleError &&
                    <p style={{ color: 'red' }}>{taskTitleError}</p>
                }

                <label>
                    descrizione:
                    <textarea ref={descriptionRef} />
                </label>

                <label>
                    Stato:
                    <select ref={statusRef} defaultValue="To do">
                        {/* <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option> */}
                        {/* MODO ALTERNATIVO FACENDO UN MAP */}
                        {["To do", "Doing", "Done"].map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                </label>

                {/* 43 --> CREAZIONE DEL BUTTON PER IL SUBMIT DEL FORM (MILESOTNE 5) */}
                <button type="submit" disabled={taskTitleError}>
                    Aggiungi task
                </button>

            </form>
        </div>
    )
}

export default AddTask;