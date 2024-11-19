import { render } from "preact";
import { App } from "./app";

render(<App />, document.querySelector("div#app") as Element);
