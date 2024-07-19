import SettingsView from "./Settings.tsx"
import { render } from "solid-js/web"
import { createSignal } from "solid-js";
import Terminalview from "./Terminal.tsx";
import { onMount } from "solid-js";


function Switcher() {
  const [settings, switchSettings] = createSignal("");

  function switchSettingsView() {
    if (settings() != "") {
      let res = document.getElementById('view');
      res?.removeChild(document.getElementById(settings()) as HTMLElement)
    }
    render(() => <SettingsView />, document.getElementById('view') as HTMLElement)
    switchSettings(s => s = "settings")
  }

  function switchTerminalView() {
    if (settings() != "") {
      let res = document.getElementById('view');
      res?.removeChild(document.getElementById(settings()) as HTMLElement)
    }
    render(() => <Terminalview />, document.getElementById('view') as HTMLElement)
    switchSettings(s => s = "terminal")

  }
  onMount(() => switchSettingsView());
  return (
    <>
      <button onclick={switchSettingsView}></button>
      <button onclick={switchTerminalView}></button>
    </>
  )
}

export default Switcher;
