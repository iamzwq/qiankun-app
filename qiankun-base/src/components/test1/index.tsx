interface Props {
	text: string;
}

const Test1 = ({ text }: Props) => {
	return (
		<div>
			test component
			<br />
			props.text：{text}
		</div>
	);
};

export default Test1;
