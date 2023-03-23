//import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
/*import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Alert from 'react-bootstrap/Alert';*/
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import logo from './logo.svg';
import './App.css';

function App() {
	//const [show, setShow] = useState(true);
	return (
		<div className="App">
			<header className="App-header">
				<p className="edit">
					Iconos Material Icons
				</p>
				<img src={logo} className="App-logo" alt="logo" />
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<p className="edit">
					React - Bootstrap
				</p>
				
				<Container>
					<Stack direction="horizontal" gap={2} className="justify-content-center">
						<Button as="a" variant="primary">
							Button as link
						</Button>
						<Button as="a" variant="success">
							Button as link
						</Button>
					</Stack>
				</Container>
				<p></p>
				<p>Or right-aligned</p>
				<p></p>
				
			</header>
		</div>
	);
}

export default App;
