import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
const App = () => {
	return (
		<div>
			<button className="button">
          Sample Button
			</button>
		</div>
	);
};
ReactDOM.render(<App/>,document.getElementById('root'));