import React, { useState, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import logo from "./logo.svg";
import "./App.css";
import BadWords from "./components/BadWords";

const queryClient = new QueryClient();

const App = () => {
  const [inputText, setInputText] = useState("");
  const inputField = useRef<any>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <textarea ref={inputField} />
          <button
            id="checkTextButton"
            type="button"
            onClick={() => {
              setInputText(inputField.current?.value || "");
            }}
          >
            Check
          </button>
          <BadWords checkText={inputText} />
        </header>
      </div>
    </QueryClientProvider>
  );
};

export default App;
