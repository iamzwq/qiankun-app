import "./public-path";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { setMainCommonComponent } from "./utils/cacheComponent";

let root:ReactDOM.Root

function render(props: any = {}) {
	const { container, routerBase } = props;
	root = ReactDOM.createRoot(
		container
			? container.querySelector("#root")
			: (document.getElementById("root") as HTMLElement)
	);
	root.render(
		<React.StrictMode>
			<BrowserRouter
				basename={window.__POWERED_BY_QIANKUN__ ? routerBase : "/"}
			>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	);
}

if (!window.__POWERED_BY_QIANKUN__) {
	render();
}

export async function bootstrap() {
	console.log("[react18] react app bootstraped");
}

export async function mount(props: any) {
	console.log("[react18] props from main framework", props);
	setMainCommonComponent(props.commonComponent)
	render(props);
}

export async function unmount(props: any) {
	root?.unmount()
}
