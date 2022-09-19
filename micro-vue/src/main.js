import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router";

import "./public-path";

let history = null;
let router = null;
let app = null;
function render(props = {}) {
	const { container, routerBase } = props;
	history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? routerBase : "/");

	router = createRouter({
		history,
		routes,
	});

	app = createApp(App);
	app.use(router).mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
	render();
}

export async function bootstrap() {
	console.log("[vue3] vue app bootstraped");
}
export async function mount(props) {
	console.log("[vue3] props from main framework", props);
	render(props);
}
export async function unmount() {
	history = null;
	router = null;
	app = null;
}
