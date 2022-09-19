import { DesktopOutlined, FileOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css'
const { Content, Footer, Sider } = Layout;

const items = [
	{
		label: <Link to="/micro-react-app">micro-react-app</Link>,
		key: "micro-react-app",
		icon: <DesktopOutlined />,
	},
	{
		label: <Link to="/micro-vue-app">micro-vue-app</Link>,
		key: "micro-vue-app",
		icon: <FileOutlined />,
	},
];

const App = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Layout
			style={{
				minHeight: "100vh",
			}}
		>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={value => setCollapsed(value)}
			>
				<div className="logo" />
				<Menu
					theme="dark"
					defaultSelectedKeys={["micro-react-app"]}
					mode="inline"
					items={items}
				/>
			</Sider>
			<Layout className="site-layout">
				<Content
					style={{
						margin: "0 16px",
					}}
				>
					<div
						className="site-layout-background"
						style={{
							padding: 24,
							minHeight: 360,
						}}
					>
						<div id="micro-app-container"></div>
					</div>
				</Content>
				<Footer
					style={{
						textAlign: "center",
					}}
				>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};

export default App;
