import { useState } from "react";

function App() {
  // state for background
  const [bgColor, setBgColor] = useState("bg-white");

  const colors = {
    Red: "bg-red-500",
    Green: "bg-green-500",
    Blue: "bg-blue-500",
    Yellow: "bg-yellow-500",
    Purple: "bg-purple-500",
  };

  const gradient = "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500";

  return (
    <div className={`h-screen flex flex-col items-center justify-center ${bgColor} transition-colors duration-500`}>
      <h1 className="text-3xl font-bold text-white mb-8 drop-shadow-md">
        Background Changer App
      </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        {Object.entries(colors).map(([name, color]) => (
          <button
            key={name}
            onMouseOver={() => setBgColor(color)}
            className="px-4 py-2 rounded-lg text-white font-medium shadow-md transition transform hover:scale-105"
            style={{ backgroundColor: color.split("-")[1] }} // quick way to colorize buttons
          >
            {name}
          </button>
        ))}

        <button
          onMouseOver={() => setBgColor(gradient)}
          className="px-4 py-2 rounded-lg text-white font-medium shadow-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 transition"
        >
          Gradient
        </button>

        <button
          onMouseOver={() => setBgColor("bg-white")}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white font-medium shadow-md hover:scale-105 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
