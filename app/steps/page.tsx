"use client";
import { useState } from "react";

// 1. Define our messages array outside the component to keep things clean
const messages = [
  "Learn React ⚛️",
  "Practice Git & GitHub 🚀",
  "Master Next.js 💻",
];

export default function Home() {
  // 2. Set up our state tracking the active step (starts at 1)
  const [step, setStep] = useState(1);

  // 3. Logic helper functions for our buttons
  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 font-sans p-4">
      {/* Main Container Card */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-10">
        {/* Numbers Row */}
        <div className="flex justify-between items-center px-4">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                step >= num
                  ? "bg-purple-600 text-white shadow-md shadow-purple-200"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Dynamic Display Message */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">
            Step {step}: {messages[step - 1]}
          </h2>
        </div>

        {/* Action Buttons Row */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={step === 1}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
              step === 1
                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700 active:scale-95"
            }`}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={step === 3}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
              step === 3
                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700 active:scale-95"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
