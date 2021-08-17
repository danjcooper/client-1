import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
const socket = io('http://localhost:3000/');

const SocketTesting = () => {
	useEffect(() => {
		socket.on('userJoined', () => {
			console.log('welcome');
		});
	}, []);

	useEffect(() => {
		socket.on('userFinished', (quizData) => {
			console.log('Someone is done', quizData);
		});
	}, []);

	const joinRoom = (e) => {
		e.preventDefault();
		// store the name of the room.
		const roomName = e.target.roomName.value;
		// send event to the socket.
		socket.emit('joinRoom', roomName);
	};

	const finishedQuiz = () => {
		const quizData = {
			roomName: 'tbc',
			score: 10,
		};
		socket.emit('userFinished', quizData);
	};

	return (
		<>
			<form onSubmit={joinRoom}>
				<input id="roomName" type="text" />
				<input type="submit" />
			</form>
			<button onClick={finishedQuiz}>finish the quiz</button>
		</>
	);
};

export default SocketTesting;
