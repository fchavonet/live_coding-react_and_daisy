import { Moon, Sun } from "lucide-react";

function App() {
  return (
    <>
      {/* Theme controller */}
      <label className="swap swap-rotate">
        <input type="checkbox" className="theme-controller" value="black" />

        <Sun className="swap-on" />

        <Moon className="swap-off" />
      </label>
    </>
  );
}

export default App;
