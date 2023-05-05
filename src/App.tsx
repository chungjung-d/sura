import { useState } from "react";
import styled from "styled-components";
import { invoke } from "@tauri-apps/api/tauri";

const Input = styled.input`
  width: 800px;
  height: 80px;
  background-color: #222;
  font-size: 2rem;
  color: white;
  padding: 0;
  margin: 0;
`;

function App(): JSX.Element {
  const [content, setContent] = useState("");

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await invoke("add_task", { content });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Input
        type="text"
        value={content}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

export default App;