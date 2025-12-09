import { useState } from "react";
import Question from "./components/Question";
import Buttons from "./components/Buttons";
import {quizData} from "./data/database";

export default function App() {
  const [selected,setSelected]=useState(null);
  const [submit,setSubmit]=useState("");
  const [isCorrect, setIsCorrect] = useState(null);



  const [index, setIndex] = useState(0);
  function submitAnswer() {
  if (!selected) {
    setSubmit("Please select an option");
    setIsCorrect(null);
    return;
  }

  if (selected === quizData[index].answer) {
    setSubmit("Correct!");
    setIsCorrect(true);
  } else {
    setSubmit("Wrong!");
    setIsCorrect(false);
  }
}

  function nextQuestion() {
    if (index < quizData.length - 1) {
    setIndex(index + 1);
  } else {
    setIndex(0); 
  }
  setSelected(null);
  setSubmit("");
  }

  return (
    <div className="bg-black min-h-screen text-2xl tracking-wide">
      
      <div className="border-2 py-10 flex flex-col items-center">
        <Question text={quizData[index].question} />


        {submit && (
          <button
            onClick={nextQuestion}
            className="mt-4 border-2 border-black px-4 py-2 rounded-lg bg-yellow-300 hover:bg-yellow-400"
          >
            Next
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
      {quizData[index].options.map((opt, i) => (
          <Buttons
          key={i}
          option={opt}
          sO={(value) => setSelected(value)}
          sL={selected}
        />
            ))}
        </div>

      <button
          onClick={submitAnswer}
          className="mt-6 border-2 border-black px-4 py-2 rounded-lg bg-white hover:bg-gray-200 mx-3"
        >
          Submit
        </button><p className={` w-fit px-2 py-1 mx-3 rounded-lg ${isCorrect===true?"bg-green-700":""}
        ${isCorrect===false?"bg-red-600":""}`}>{submit}</p>
        { submit && (
          <p className="mt-4 font-bold">{submit}</p>
        )}
    </div>
  );
}
