import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// functional component- normal JS function that returns a JSX

const Title = () => (
	<h1 className="heading">Namaste React From JSX 🚀</h1>
)

const Heading = () => {
	return (
		<div id="container">
			<Title />
			<h1 className="heading">Namaste React From Functional Component JSX 🚀</h1>
		</div>
	);
}

// React element using JSX
const heading = <h1 className="heading">Namaste React From JSX 🚀</h1>
root.render(<Heading/>);
