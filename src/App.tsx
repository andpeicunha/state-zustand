import { useShallow } from "zustand/react/shallow";
import "./App.css";
import { ButtonAdd } from "./component/button/buttonAdd";
import { ButtonRemove } from "./component/button/buttonRemove";
import useStoreCount from "./store/bookStore";

function App() {
  // const { count } = useStoreCount(
  //   (state) => ({
  //     count: state.count,
  //   }),
  //   shallow
  // );
  const { count } = useStoreCount(
    useShallow((state) => ({ count: state.count }))
  );
  
  return (
    <div className="flex flex-col h-full w-full justify-between text-white">
      <span className="pt-3 text-2xl">Contagem dos Números: {count}</span>
      <div className="p-3">
        <ButtonAdd />
        <ButtonRemove />
      </div>
    </div>
  );
}

export default App;
