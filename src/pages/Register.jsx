import axios from 'axios';
import React, { useEffect, useState } from 'react';

const api = 'https://94.74.86.174:8080/api';

export default function Register() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios
				.post(`94.74.86.174:8080/api/register`, {
					email,
					password,
					username,
				})
				.then((res) => {
					console.log(res.data);
				});
		} catch (err) {
			console.log(err);
		}
	};

	// useEffect(() => {
	// 	console.log(username, email, password);
	// }, [username, email, password]);

	return (
		<div>
			<div>Register</div>
			{/* <form onSubmit={(e) => handleSubmit(e)}> */}
			<form>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						id='email'
						value={email}
						className='w-full px-4 py-2 mb-2 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
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
