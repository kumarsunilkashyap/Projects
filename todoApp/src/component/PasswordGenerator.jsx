import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [type, setType] = useState("mixed");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  const generatePassword = () => {
    let charset = "";
    if (type === "numeric") {
      charset = "0123456789";
    } else if (type === "alphabetic") {
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (type === "mixed") {
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
    setCopySuccess(""); // Reset copy success message
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(
      () => {
        setCopySuccess("Password copied!");
      },
      () => {
        setCopySuccess("Failed to copy password.");
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Password Generator
        </h1>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Password Length</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="border rounded p-2 w-full"
            min="1"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Password Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="numeric">Numeric</option>
            <option value="alphabetic">Alphabetic</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>
        <button
          onClick={generatePassword}
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-200"
        >
          Generate Password
        </button>
        {password && (
          <div className="mt-4 p-4 border rounded  bg-gray-100 text-center">
            <p className="font-mono text-lg">
              {isPasswordVisible ? password : "*".repeat(password.length)}
            </p>
            <button
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="mt-2 text-blue-500 hover:underline"
            >
              {isPasswordVisible ? "Hide" : "Show"} Password
            </button>
            <button
              onClick={copyToClipboard}
              className="mt-2 ml-3 text-blue-500 hover:underline"
            >
              Copy Password
            </button>
            {copySuccess && (
              <p className="mt-2 text-green-500">{copySuccess}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
