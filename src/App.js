import React, { useState } from 'react';

function App() {
	const [tech, setTech] = useState(['ReactJS', 'React Native']);
	const [newTech, setNewTech] = useState('');

	function handleAdd() {
		setTech([...tech, newTech]);
		setNewTech(''); // Limpa o campo input.
	}

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
