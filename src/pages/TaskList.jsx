// 21 --> VERIFICHIAMO LE NOSTRE CHIAMATE DI USEEFFECT PER LEGGERE LE TASKS E IMPORTIAMO USECONTEXT CHE E' IL NOSTORN HOOK (MILESTONE 2)
import { useCallback, useContext, useMemo, useState } from "react";
// 22 --> VERIFICHIAMO LE NOSTRE CHIAMATE DI USEEFFECT PER LEGGERE LE TASKS E IMPORTIAMO GLOBALCONTEXT (MILESTONE 2)
import { GlobalContext } from "../context/GlobalContext";
// 27 --> IMPORTO TASKROW (MILESTONE 3)
import TaskRow from "../components/TaskRow";

// 104 --> CREAZIONE DELLA FUNZIONE DI DEBOUNCE PER MIGLIORARE LE PRESTAZIONI (MILESOTNE 12)
function debounce (callback, delay) {
    let timer; //SCOPE
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay)
    }
}


// 5 --> FARE L'EXPORT E LA FUNZIONE DI DEFAULT INIZIALE (MILESTONE 1)
function TaskList() {

    // 23 --> QUI RACCOGLIAMO LA NOSTRA VALUE CHE AL SUO INTERNO TROVIAMO TASTK E SETTASKS, ANDIAMO A DESTRUTTURARE E VEDERE SE FUNZIONANO (MILESTONE 2)
    const { tasks } = useContext(GlobalContext);
    console.log('Tasks:', tasks);

    // 100 --> CREAZIONE DELLO STATO PER L'INPUT DI RICERCA CHE VERRA' FATTO SULLE TASK (MILESTONE 12)
    const [searchQuery, setSearchQuery] = useState("");
    // 105 --> VERSIONE DEBOUNCATA DI SETSEARCHQUEARY (MILESTONE 12)
    const debounceSetSearchQuery = useCallback(debounce(searchQuery, 500), []);

    // 94 --> CREARE I 2 NUOVI STATE (MILESTONE 11)
    const [sortBy, setSortBy] = useState('createdAt');
    const [sortOrder, setSortOrder] = useState(1);

    // 97 --> CREAZONE DELLA VARIABILE PER LE FRECCIE SU E GIU' (MILESTONE 11)
    const sortIcon = sortOrder === 1 ? "↓" : "↑";

    // 95 --> CREAZIONE DELLA FUNZIONE PER L'ORDINE CRESCENTE E DECRESCENTE (MILESTONE 11)
    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1);
        } else {
            setSortOrder(field);
            setSortOrder(1);
        }
    }

    // 98 --> CREAZIONE DEL USEMEMO (MILESTONE 11)
    // 101 --> MODIFICARE L'USEMEMO PER FILTRARE E ORDINARE I TASK (MILESTONE 12)
    const filteredAndSortedTask = useMemo(() => {
        // 103 --> PRIMA DI FARE SORT DEVO FARE UN FILTRO (MILESTONE 12)
        return [...tasks]
        .filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {

            let comparison;

            if (sortBy === 'title') {
                comparison = a.title.localCompare(b.title)
            } else if (sortBy === 'status') {
                const statusOptions = ["To do", "Doing", "Done"];
                const indexA = statusOptions.indexOf(a.status);
                const indexB = statusOptions.indexOf(b.status);
                comparison = statusOptions.indexOf(a.status) - statusOptions(b.status)
            } else if (sortBy === 'createdAt') {
                const dateA = new Date(a.createdAt).getTime();
                const dateB = new Date(b.createdAt).getTime();
                comparison = dateA - dateB;
            }
            return comparison * sortOrder;
        })
        // 102 --> QUESTO USEMEMO DEVE RICEVERE LA NOSTRA SEARCHQUERY (MILESTONE 12)
    }, [tasks, sortBy, sortOrder, searchQuery]);

    return (
        <div>
            <h1>Lista dei task</h1>

            {/* 99 --> CREAZIONE DELL'INPUT PER LA RICERCA DELLE TASK (MILESTONE 12) */}
            <input
                type="text"
                placeholder="Cerca una task..."
                // value={searchQuery}
                onChange={e => debounceSetSearchQuery(e.target.value)}
            />


            {/* 24 --> STRUTTURARE TASKLIST.JSX COME UNA TABELLA, CON IL NOME, STATO E LA DATA DI CREAZIONE (MILESTONE 3) */}
            <table>
                <thead>
                    <tr>

                        {/* 96 --> INSERIMENTO DELLA FUNZIONE HANDLESORT --> QUNADO VADO A FARE CLICK NON HO NESSUNA RESPONSE DI QUELLO CHE STA AVVENENDO, QUINDI VADO A CREARE LA VARIABILE SORTICON CHE RAPPRESENTA LA FRECCIA CHE VA SU E GIU' IN BASE AL SORTORDER (MILESTONE 11) */}
                        <th onClick={() => handleSort('title')}>
                            Nome {sortBy === "title" && sortIcon}
                        </th>

                        <th onClick={() => handleSort('status')}>
                            Status {sortBy === "status" && sortIcon}
                        </th>

                        <th onClick={() => handleSort('createdAt')}>
                            Data di Creazione {sortBy === "createdAt" && sortIcon}
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {/* 26 --> FARE UN MAP PER OGNI TASK, PERCHE' PER OGNI TASK DEVO CREARE UN TASKROW A CUI PASSO LA TASK IN QUESTIONE (MILESTONE 3) */}
                    {filteredAndSortedTask.map(task => (
                        <TaskRow key={task.id} task={task} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList;