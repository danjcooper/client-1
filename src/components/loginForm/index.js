import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './style.module.css';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { login } = useAuth();

	const handleEmailInputChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordInputChange = (e) => {
		setPassword(e.target.value);
	};

	const handleFormSubmit = async (e) => {
		try {
			e.preventDefault();
			const response = await login(email, password);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<form className={styles.loginForm} aria-label="login form" onSubmit={handleFormSubmit}>
				<label className={styles.inputFields}>
					E-mail:{' '}
					<input
						onChange={handleEmailInputChange}
						value={email}
						id="loginEmail"
						type="email"
						placeholder="email"
					/>
				</label>
				<label className={styles.inputFields}>
					Password:{' '}
					<input
						onChange={handlePasswordInputChange}
						value={password}
						id="loginPassword"
						type="password"
						placeholder="password"
					/>
				</label>
				<input className={styles.loginButton} type="submit" value="log in" />
			</form>
			<hr className={styles.rule} />
		</>
	);
};

export default LoginForm;
