import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// const qs = require('qs');

export default function Login() {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		// try {
		// 	fetch('94.74.86.174:8080/api/login', {
		// 		method: 'POST',
		// 		body: JSON.stringify({ username, password }),
		// 	})
		// 		.then((res) => res.json)
		// 		.then((data) => console.log(data));
		// } catch (err) {
		// 	console.log(err);
		// }

		// await axios
		// 	.post('94.74.86.174:8080/api/login', qs.stringify({ username, password }))
		// 	.then((res) => {
		// 		console.log(res.data);
		// 		localStorage.setItem('token1', res.data.token);
		// 	})
		// 	.catch((err) => console.log(err));

		await axios({
			method: 'POST',
			url: '94.74.86.174:8080/api/login',
			data: { username, password },
		}).then((res) => {
			// console.log(res.data);
			localStorage.setItem('token1', res.data.token);
		});
	};

	return (
		<div>
			<div>login</div>
			<button onClick={() => navigate('/register')}>register</button>
			<form>
				<div>
					<label htmlFor='name'>User Name</label>
					<input
						type='text'
						id='name'
						value={username}
						className='w-full px-4 py-2 mb-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400'
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={password}
						className='w-full px-4 py-2 mb-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type='submit' onClick={(e) => handleSubmit(e)}>
					submit
				</button>
			</form>
		</div>
	);
}
