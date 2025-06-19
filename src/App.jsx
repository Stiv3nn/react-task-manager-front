// 1 --> CREIAMO IL ROUTER PRINCIPALE IN APP.JSX UTILIZZANDO BROWSERROUTER IMPORTANDO ANCHE NAVLINK QUNADO SERVIRA' (MILESTONE 1)
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
// 7 --> IMPORTO IL TASKLIST (MILESTONE 1)
import TaskList from "./pages/TaskList"
// 8 --> IMPORTO IL ADDTASK (MILESTONE 1)
import AddTask from "./pages/AddTask"
// 19 --> IMPORTO GLOBALPROVIDER (MILESTONE 2)
import { GlobalProvider } from "./context/GlobalContext"



function App() {

  return (
    // 20 --> INSERIAMOLO PER WRAPPARE TUTTA LA NOSTRA APPLICAZIONE (MILESTONE 2)
    <GlobalProvider>
      {/* 2 --> RITORNIAMO UN BROWSERROUTER CON ALL'INTERNO LE NOSTR ROTTE (MILESTONE 1) */}
      <BrowserRouter>

        {/* 9 --> CREARE LA BARRA DI NAVIGAZIONE CON IL NAVLINK (MILESTONE 1) */}
        <nav>
          <NavLink to="/">Lista Task</NavLink>
          <NavLink to="/add">Aggiungi Task</NavLink>
        </nav>

        <Routes>
          {/* 3 --> CREARE LA ROTTA TASKLIST.JSX CON IL PATH APPOSITO E L'ELEMENTO APPOSITO (MILESTONE 1) ---> POI SONO ANDATO A CREARE I COMPONENTI CHE SONO LE MIE PAGINE ALL'INTERNO DELLA CARTELLA "pages" */}
          <Route path="/" element={<TaskList />} />
          {/* 4 --> CREARE LA ROTTA ADDTASK.JSX CON IL PATH APPOSITO E L'ELEMENTO APPOSITO (MILESTONE 1) ---> POI SONO ANDATO A CREARE I COMPONENTI CHE SONO LE MIE PAGINE ALL'INTERNO DELLA CARTELLA "pages" */}
          <Route path="/add" element={<AddTask />} />
        </Routes>

      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
