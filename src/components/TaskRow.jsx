// 29 --> IMPORTARE REACT.MEMO (MILESTONE 3)
import { memo } from "react";
// 53 --> IMPORTARE LINK (MILESTONE 7)
import { Link } from "react-router-dom";

// 25 --> CREAZIONE DEL COMPONENTE TASKROW.JSX E DELLA FUNZIONE ----> COME PROP CI SARA' TASK PER TIRARE FUORI LE PROPRIETA' E STAMPARLE NEL MIO COMPONENTE ----> CI RITORNERA' UNA RIGA DELLA TABELLA CIOE' UN TAG "<TR></TR>" (MILESTONE 3) // 30 --> LA FUNZIONE DEL PUNTO 25 E' STATA SOSTITUITA DA REACT.MEMO() PER MIGLIORARE L'OTTIMIZAZZIONE ED EVITARE RENDER INUTILI (MILESTONE 3)
const TaskRow = memo(({ task }) => {

    // 28 --> APPLICARE UNO STILE DIFFERENTE ALLA COLONNA "STATUS", ASSEGNANDO I SEGUENTI COLORI DI SFONDO ALLE CELLE IN BASE AL VALORE DELLO STATO: TO DO= ROSSO / DOING= GIALLO / DONE= VERDE (MILESTONE 3)
    const statusClassName = task.status.replace(" ", "").toLowerCase();

    return(
        <tr>
            {/* 54 --> RENDERE "TITLE" UN LINK A /task/:id (MILESTONE 7) */}
            <td><Link to={`/task/${task.id}`}>{task.title}</Link></td>
            <td className={statusClassName}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    )
});

export default TaskRow;