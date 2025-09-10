import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-4">
      <div className="w-full max-w-md bg-gray-900 shadow-xl rounded-2xl p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          🔐 Password Generator
        </h1>

        {/* Password box */}
        <div className="flex shadow-md rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-lg bg-gray-800 text-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-medium transition"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4 text-gray-300">
          {/* Length */}
          <div className="flex items-center justify-between">
            <label className="font-medium">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={32}
              value={length}
              className="cursor-pointer w-40 accent-pink-500"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* Numbers */}
          <div className="flex items-center justify-between">
            <label className="font-medium">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="w-5 h-5 accent-indigo-500"
            />
          </div>

          {/* Special Characters */}
          <div className="flex items-center justify-between">
            <label className="font-medium">Include Symbols</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="w-5 h-5 accent-indigo-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
