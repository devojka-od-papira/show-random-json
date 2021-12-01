/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateGeneratedJson } from '../actions';

interface ConfigValue {
  inputData: any,
  data: any,
  index: number
}

function Input(props: ConfigValue) {
	const { inputData, data, index } = props;
	const [textAreaValue, setTextAreaValue] = useState('');

	const dispatch = useDispatch();

	const handleTextAreaChange = (e: any) => {
		setTextAreaValue(e.target.value);
		dispatch(updateGeneratedJson(e.target.value, inputData.key, data, index));
	};

	if (inputData.type === 'textarea') {
		return <textarea onChange={(e: any) => handleTextAreaChange(e)} value={textAreaValue || inputData.value} />;
	}
	if (inputData.type === null) {
		return null;
	}
	if (inputData.type === 'radio') {
		return (
			<div>
				<input type={inputData.type} id="true" placeholder={inputData.value} name="radio" checked={inputData.value === false} />
				<label htmlFor="true">False</label>
				<input type={inputData.type} id="false" placeholder={inputData.value} name="radio" checked={inputData.value === false} />
				<label htmlFor="false">True</label>
			</div>
		);
	}
	return <input value={inputData.value} onChange={(e: any) => dispatch(updateGeneratedJson(e.target.value, inputData.key, data, index))} type={inputData.type} placeholder={inputData.value} />;
}

export default Input;
