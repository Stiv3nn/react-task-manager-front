// 74 --> IMPORTO REACTDOM (MILESTONE 9)
import ReactDom from 'react-dom';
// 71 --> CREAZIONE DEL COMPONENTE MODAL.JSX E DELLA FUNZIONE E PASSO TUTTI I PARAMETRI CHE MI VENGONO SUGGERITI DAL ESERCIZIO (MILESOTNE 9)
function Modal({ title, content, show, onConfirm, onClose, confirmText = "Conferma" }) {
    // 72 --> QUESTA MODALE DOBBIAMO MOSTRARLA SOLTANTO QUNADO SHOW E' TRUE (MILESTONE 9)
    if (!show) return null;

    // 73 --> ALTRIMENTI RITRONIAMO REACTPORTAL SUL DOCUMENT BODY CHE CREA IL COMPONENTE --> ALL'INTERNO DOBBIAMO PASSARE IL COMPNENTE CHE E' UN DIV E DOVE VOGLIAMO CREARLO, QUINDI DOCUMENT.BODY (MILESTONE 9)
    return ReactDom.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <h2>{title}</h2>
                {content}
                <div className="modal-actions">
                    <button onClick={onClose}>Annulla</button>
                    <button onClick={onConfirm}>{confirmText}</button>
                </div>
            </div>
        </div>,
        document.doby
    );
}

export default Modal;