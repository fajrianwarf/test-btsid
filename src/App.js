import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
	// const [token, setToken] = useState(localStorage.getItem('token1'));

	// useEffect(() => {
	// 	if(!token) return navigate('/login')
	// }, [token])

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Index />}/>
					<Route path='/login' element={<Login />}/>
					<Route path='/register' element={<Register />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
