import React, { useState, useEffect } from 'react';

function App() {
	const [tech, setTech] = useState([]);
	const [newTech, setNewTech] = useState('');

	function handleAdd() {
		setTech([...tech, newTech]);
		setNewTech(''); // Limpa o campo input.
	}

	useEffect(() => {
		// Verifixa se tem algo no localStorage.
		const storageTech = localStorage.getItem('tech');

		// Caso tenha algo no localStorage, executa o 'setTech'.
		if (storageTech) {
			setTech(JSON.parse(storageTech));
		}
	}, []);

	// Update
	useEffect(() => {
		localStorage.setItem('tech', JSON.stringify(tech));
	}, [tech]); // executa toda vez que o valor 'tech' for auterado.

	return (
		<>
			<ul>
				{tech.map((techs) => (
					<li key={techs}> {techs} </li>
				))}
			</ul>

			<input
				value={newTech}
				onChange={(event) => setNewTech(event.target.value)}
			/>
			<button type="button" onClick={handleAdd}>
				Adicionar nova tecnológia
			</button>
		</>
	);
}

export default App;
