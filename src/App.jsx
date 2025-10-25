import Button from "./components/Button"
import Card from "./components/Card"
import Notification from "./components/Notification"
import BlockQutoe from "./components/BlockQutoe"
function App() {
  return (
    <div className="flex flex-col h-screen gap-2">
      <Button />
      <Card></Card>
      {/* <Notification />*/}
      {Notification()}
      <BlockQutoe />
    </div>

  )
}

export default App


/* 
Easy! In Tailwind, you can use the h-screen class to make an element’s height equal to the viewport height (100vh)

Easy! In Tailwind, full viewport width is handled with the w-screen class, similar to how h-screen handles height.


min-w-screen / max-w-screen → minimum or maximum width = viewport width

Usually used for full-page layouts, hero sections, or background containers




<body class="m-0 p-0 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <!-- Container covering full viewport -->
  <div class="w-screen h-screen flex flex-col">
    
    <!-- Header -->
    <header class="h-16 bg-purple-600 dark:bg-purple-800 text-white flex items-center justify-center">
      <h1 class="text-xl font-bold">Header</h1>
    </header>

    <!-- Main Content -->
    <main class="flex-1 bg-white dark:bg-gray-800 flex items-center justify-center">
      <div class="text-center">
        <h2 class="text-3xl font-semibold">Main Section</h2>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          This section fills remaining viewport space.
        </p>
        <!-- Dark Mode Toggle Button -->
        <button 
          class="mt-6 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          onclick="document.documentElement.classList.toggle('dark')"
        >
          Toggle Dark Mode
        </button>
      </div>
    </main>

    <!-- Footer -->
    <footer class="h-12 bg-gray-800 dark:bg-gray-700 text-white flex items-center justify-center">
      Footer
    </footer>

  </div>
</body>

<header class="fixed top-0 w-screen h-16 ...">...</header>
<main class="mt-16 mb-12 ...">...</main>
<footer class="fixed bottom-0 w-screen h-12 ...">...</footer>
Add overflow-auto to <main> to allow scrolling if content exceeds viewport

document.documentElement.classList.toggle('dark')


*/

/* 
import { useState, useEffect } from "react";

export default function App() {
  // Initialize darkMode from localStorage, default to false
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true" ? true : false;
  });

  // Apply or remove dark class on <html> and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode); // save preference
  }, [darkMode]);

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <header className="h-16 bg-purple-600 dark:bg-purple-800 text-white flex items-center justify-center">
        <h1 className="text-xl font-bold">Header</h1>
      </header>

      <main className="flex-1 bg-white dark:bg-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Main Section</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            This section fills the remaining viewport space.
          </p>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-6 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </main>

      <footer className="h-12 bg-gray-800 dark:bg-gray-700 text-white flex items-center justify-center">
        Footer
      </footer>
    </div>
  );
}

*/