import { useShallow } from "zustand/react/shallow";
import useStoreCount from "../../store/bookStore";

export function ButtonAdd() {
  // const { inc } = useStoreCount(useShallow((state) => ({ inc: state.inc })));
  // const inc = useStoreCount(useShallow((state) => Object.keys(state.inc)));
  const [inc] = useStoreCount(useShallow((state) => [state.inc]));

  return (
    <div className="flex flex-col justify-center items-center p-3">
      <button
        className="bg-slate-500 p-2 rounded-lg text-cyan-50 w-[10rem] mb-2"
        onClick={inc}
      >
        Adicionar
      </button>
      <span className="text-sm">{Math.random()}</span>
    </div>
  );
}
