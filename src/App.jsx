import { useState } from 'react';
import './App.css';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() === '') return;
    setTarefas([...tarefas, tarefa.trim()]);
    setTarefa('');
  }

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>

      <input
        data-testid="input-tarefa"
        type="text"
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />

      <button data-testid="botao-adicionar" onClick={adicionarTarefa}>
        Adicionar
      </button>

      <ul data-testid="lista-tarefas">
        {tarefas.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;