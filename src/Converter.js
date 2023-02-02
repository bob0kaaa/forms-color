import React, { useState } from 'react';
import RGB from './RGB';

export default function Converter() {

	const [form, setForm] = useState({
		hex: '',
	});

	const handleSubmit = evt => {
		evt.preventDefault();
		console.log(evt.type);
		console.dir(evt.target);
	}

	const handleNameChange = evt => {
		console.log('evt.target.value.length', evt.target.value.length);
		setForm(() => ({ hex: evt.target.value }));
	};

	return (
		<form onSubmit={handleSubmit} >
			<div className='input'>
				<label htmlFor="hex">HEX </label>
				<input id="hex" name="hex" value={form.hex} onChange={handleNameChange} />
			</div>
			<RGB value={form.hex} />
		</form>
	);
}