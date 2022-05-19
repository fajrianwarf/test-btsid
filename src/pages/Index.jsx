import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

export default function Index() {
	const navigate = useNavigate();
	const [token, setToken] = useState(localStorage.getItem('token1'));

	useEffect(() => {
		if (!token) return navigate('/login');
	}, [token]);

	return (
		<div>
			{/* {!token ? (
				<div>
					<div>Login</div>
					<div>Register</div>
				</div>
			) : (
				<div>hello</div>
			)} */}
			<div>Hello</div>
			<div>yeah</div>
		</div>
	);
}
