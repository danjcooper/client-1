import React, { useState } from 'react';
import styles from './style.module.css';

export default ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		roomName: '',
		maxPlayers: 4,
		public: true,
		password: null,
	});

	const [shown, setShown] = useState(false);

	const hiddenStyle = {
		transition: '1s',
		maxHeight: shown ? '100px' : '0px',

		pointerEvents: shown ? 'all' : 'none',
		opacity: shown ? 1 : 0,
	};

	const handleTextInputChange = (e) => {
		setFormData((prevState) => {
			return { ...prevState, [e.target.id]: e.target.value };
		});
	};

	const handleCheckboxChange = (e) => {
		setShown((prevState) => !prevState);
		setFormData((prevState) => {
			return {
				...prevState,
				[e.target.id]: !e.target.checked,
				password: e.target.checked ? '' : null,
			};
		});
	};

	const handleMaxPlayersChange = (e) => {
		const { value } = e.target;
		if (value !== '' && (value > 9 || value < 1)) {
			return;
		}
		setFormData((prevState) => {
			return { ...prevState, [e.target.id]: e.target.value };
		});
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		onSubmit(formData);
	};

	return (
		<>
			<form className={styles.gameDisplay} onSubmit={handleFormSubmit}>
				<h2 className={styles.formHeading}>Create a Quiz</h2>
				<label htmlFor="roomName">Room Name</label>
				<input
					onChange={handleTextInputChange}
					value={formData.roomName}
					id="roomName"
					name="roomName"
					type="text"
					required
				/>

				<label htmlFor="maxPlayers">Number of players</label>
				<input
					onChange={handleMaxPlayersChange}
					value={formData.maxPlayers}
					id="maxPlayers"
					name="maxPlayers"
					type="number"
					min={1}
					max={9}
					required
				/>

				<div style={hiddenStyle}>
					<label htmlFor="password">Room Password</label>
				</div>
				<div style={hiddenStyle}>
					<input
						onChange={handleTextInputChange}
						value={formData.password}
						id="password"
						name="password"
						type="text"
						required={shown ? true : false}
					/>
				</div>
				<input type="submit" />

				<label htmlFor="public">Private</label>
				<input onChange={handleCheckboxChange} id="public" name="public" type="checkbox" />
			</form>
		</>
	);
};
