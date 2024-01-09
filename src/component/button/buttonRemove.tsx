import { useShallow } from "zustand/react/shallow";
import useStoreCount from "../../store/bookStore";

export function ButtonRemove() {
  const { dec } = useStoreCount(useShallow((state) => ({ dec: state.dec })));

  return (
    <div className="flex flex-col justify-center items-center p-3">
      <button
        className="bg-slate-500 p-2 rounded-lg text-cyan-50 w-[10rem] mb-2"
        onClick={dec}
      >
        Remove
      </button>
      <span className="text-sm">{Math.random()}</span>
    </div>
  );
}
