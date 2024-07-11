import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "../actions";
import { useNavigate } from "react-router-dom";

const ReduxTutorial = () => {
  const currentNumber = useSelector((state) => state.number.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("Redux number :- ",currentNumber);

  return (
    <div className="flex flex-col mt-[12%] min-w-[30%] items-center mx-auto w-fit border border-white">
      <h1 className="mt-5 text-slate-500" onClick={() => navigate("/")}>Increment/Decrement using Redux</h1>

      <div className="flex flex-row mt-5 mb-5 text-[20px]">
        <button className="select-none border font-bold bg-white hover:bg-gray-400 text-slate-500 rounded-tl-md rounded-bl-md border-white px-3 py-0.5 cursor-pointer" onClick={() => dispatch(decNum(1))}>-</button>
        <p className="border text-slate-500 border-white px-3 py-0.5">{currentNumber}</p>
        <button className="select-none border font-bold bg-white hover:bg-gray-400 text-slate-500 rounded-tr-md rounded-br-md border-white px-3 py-0.5 cursor-pointer" onClick={() => dispatch(incNum(1))}>+</button>
      </div>
    </div>
  )
}

export default ReduxTutorial
