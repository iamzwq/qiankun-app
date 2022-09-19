import { registerMicroApps, setDefaultMountApp, start } from "qiankun";

const loader = (loading: boolean) => {
	console.log("loader loading->", loading);
};

registerMicroApps(
	[
		{
			name: "micro-react",
			entry: "//localhost:5000",
			container: "#micro-app-container",
			activeRule: "/micro-react-app",
			props: { routerBase: "/micro-react-app" },
			loader,
		},
		{
			name: "micro-vue",
			entry: "//localhost:8080",
			container: "#micro-app-container",
			activeRule: "/micro-vue-app",
			props: { routerBase: "/micro-vue-app" },
			loader,
		},
	],
	{
		async beforeLoad() {
			console.log("加载前");
		},
		async beforeMount() {
			console.log("挂载前");
		},
		async afterMount() {
			console.log("挂载后");
		},
		async beforeUnmount() {
			console.log("卸载前");
		},
		async afterUnmount() {
			console.log("卸载后");
		},
	}
);

setDefaultMountApp('/micro-react-app')

start();
