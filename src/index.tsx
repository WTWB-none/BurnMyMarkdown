/* @refresh reload */
import { render } from "solid-js/web";
import App from "./Terminal";
import Term from "./Terminal";

render(() => <Term />, document.getElementById("root") as HTMLElement);
