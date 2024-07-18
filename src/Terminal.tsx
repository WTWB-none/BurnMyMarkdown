import { createSignal, onMount } from "solid-js";
import { Terminal } from "@xterm/xterm";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";


function Terminalview() {
  const [terminal, setTerm] = createSignal('');
  const [termloaded, SwitchMode] = createSignal('false');
  onMount(() => {
    var term = new Terminal();
    term.open(document.getElementById('terminal'));
    SwitchMode(f => f = 'true');
  })
  return (
    <>
      <div id="terminal"></div>
    </>
  )
}

export default Terminalview;
