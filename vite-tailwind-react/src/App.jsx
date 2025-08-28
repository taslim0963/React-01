import React, { useEffect, useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="flex items-center justify-center min-h-screen text-gray-900 dark:text-gray-100">
      <button
        onClick={() => setDark((d) => !d)}
        className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        {dark ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}
