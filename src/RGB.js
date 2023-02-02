import React from 'react';
import PropTypes from 'prop-types';

function RGB(props) {
	const { value } = props;
	let num = 0;
	let rgb = 'rgb(';
	let message = '';
	const regex = /^#([0-9a-f]{6})$/i;

	if (value.length === 7 && regex.test(value)) {
		const hex = value.slice(1);
		for (let i = 0; i <= 4; i = i + 2) {
			num = parseInt(hex.slice(i, i + 2), 16);
			rgb += num + ',';
		}
		rgb = rgb.slice(0, rgb.length - 1) + ')';
		message = rgb;
		document.body.style.backgroundColor = `${rgb}`;
	} else if (value.length === 7 && !regex.test(value)) {
		rgb = 'rgb(255,0,0)';
		message = "ошибка";
		document.body.style.backgroundColor = 'rgb(255,0,0)';
	} else if (value.length < 7 || value.length === 0) {
		rgb = 'rgb(255,255,255)';
		message = "";
		document.body.style.backgroundColor = 'rgb(255,255,255)';
	}
	return (
		<div className='output'>
			<label htmlFor="rgb">RGB </label>
			<input id="rgb" type="text" value={message} style={{ backgroundColor: `${rgb}` }} readOnly />
		</div>
	);
}

RGB.defaultProps = {
	value: ''
}

RGB.propTypes = {
	value: PropTypes.string
}

export default RGB;