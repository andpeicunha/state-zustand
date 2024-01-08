import "./App.css";

import { useStore } from "./store/bookStore";

function App() {
  const { count, inc, dec } = useStore();

  return (
    <div className="flex flex-col h-full w-full justify-between">
      <span className="pt-3">Contagem dos Números: {count}</span>
      <div className="p-3">
        <button
          className="bg-slate-500 p-2 rounded-lg text-cyan-50"
          onClick={inc}
        >
          Adiciona
        </button>
      </div>
      <div className="p-3">
        <button
          className="bg-slate-500 p-2 rounded-lg text-cyan-50"
          onClick={dec}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default App;
