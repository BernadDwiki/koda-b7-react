import { useState } from "react";

function MiniTask1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="flex flex-col justify-center items-center p-8 bg-blue-500">
        <p className="text-3xl pb-3">{count}</p>
        <div>
          <button
            className="border-2 border-black p-2 mr-4 bg-amber-200"
            onClick={() => {
              if (count < 10) {
                setCount((count) => count + 1);
              }
            }}
          >
            Counting Up
          </button>
          <button
            className="border-2 border-black p-2 bg-cyan-600"
            onClick={() => {
              if (count > 0) {
                setCount((count) => count - 1);
              }
            }}
          >
            Decreasing Count
          </button>
        </div>
      </main>
    </>
  );
}

export default MiniTask1;
