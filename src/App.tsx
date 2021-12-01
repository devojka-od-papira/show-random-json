/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { fetchGeneratedJson } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import generatedJson from './generated.json';
import { RootState } from './reducers';
import './style/style.css';
import Input from './components/Input';

function App() {
	const dispatch = useDispatch();
	const data = useSelector((state: RootState) => state.randomJson.data);

	useEffect(() => {
		dispatch(fetchGeneratedJson(generatedJson));
	}, []);

	function isId(value: string): boolean {
		const pattern = /(\w)*\\(?!\\)(\w)*\\(?!\\)(\w)*(?!\\)/g;

		return pattern.test(value);
	}

	function isString(value: string): boolean {
		return typeof value === 'string' && value.length <= 30;
	}

	function isTextArea(value: string): boolean {
		return typeof value === 'string' && value.length > 30;
	}

	function isBoolean(value: boolean): boolean {
		return typeof value === 'boolean';
	}

	function isDate(value: string): boolean {
		return !!Date.parse(value);
	}

	function isNumber(value: number): boolean {
		return typeof value === 'number';
	}

	function isEmail(value: string): boolean {
		const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

		return regex.test(value);
	}

	function defineInputType(value: any, key: any) {
		if (isNumber(value)) {
			return {
				type: 'number',
				value,
				key,
			};
		}
		if (isString(value) && !isEmail(value)) {
			return {
				type: 'string',
				value,
				key,
			};
		}
		if (isTextArea(value) && !isEmail(value)) {
			return {
				type: 'textarea',
				value,
				key,
			};
		}
		if (isEmail(value)) {
			return {
				type: 'email',
				value,
				key,
			};
		}
		if (isId(value)) {
			return {
				type: null,
				value,
				key,
			};
		}

		if (isBoolean(value)) {
			return {
				type: 'radio',
				value,
				key,
			};
		}

		if (isDate(value)) {
			return {
				type: 'date',
				value,
				key,
			};
		}

		return {
			type: null,
			value,
			key,
		};
	}
	return (
		<div>
			{data.map((item: any, index: number) => {
				const key = Object.keys(item);
				return (
					<div className="card">
						<div>
							<p>
								{key[0]}
								:
								{item._id}
							</p>
							<Input index={index} data={data} inputData={defineInputType(null, null)} />
						</div>
						<div>
							<p>
								{key[1]}
								:
								{item.index}
							</p>
							<Input index={index} data={data} inputData={defineInputType(item.index, key[1])} />
						</div>
						<div>
							<p>
								{key[2]}
								:
								{item.guid}
							</p>
							<Input index={index} data={data} inputData={defineInputType(item.guid, key[2])} />
						</div>
						<div>
							<p>
								{key[3]}
								:
								{`${item.isActive}`}
							</p>
							<Input
								index={index}
								data={data}
								inputData={defineInputType(item.isActive, key[3])}
							/>
						</div>
						<div>
							<p>
								{key[4]}
								:
								{item.balance}
							</p>
							<Input
								index={index}
								data={data}
								inputData={defineInputType(item.balance, key[4])}
							/>
						</div>
						<div>
							<p>
								{key[6]}
								:
								{item.age}
							</p>
							<Input index={index} data={data} inputData={defineInputType(item.age, key[6])} />
						</div>
						<div>
							<p>
								{key[7]}
								:
								{item.eyeColor}
							</p>
						</div>
						<Input index={index} data={data} inputData={defineInputType(item.eyeColor, key[7])} />
						<div>
							<p>
								{key[8]}
								:
								{item.name}
							</p>
							<Input index={index} data={data} inputData={defineInputType(item.name, key[8])} />
						</div>
						<div>
							<p>
								{key[9]}
								:
								{item.gender}
							</p>
							<Input index={index} data={data} inputData={defineInputType(item.gender, key[9])} />
						</div>
						<div>
							<p>
								{key[10]}
								:
								{item.company}
							</p>
							<Input
								index={index}
								data={data}
								inputData={defineInputType(item.company, key[10])}
							/>
						</div>
						<div>
							<p>
								{key[11]}
								:
								{item.email}
							</p>
							<Input index={index} data={data} inputData={defineInputType(item.email, key[11])} />
						</div>
						<div>
							<p>
								{key[12]}
								:
								{item.phone}
							</p>
							<Input index={index} data={data} inputData={defineInputType(item.phone, key[12])} />
						</div>
						<div>
							<p>
								{key[13]}
								:
								{item.address}
							</p>
							<Input
								index={index}
								data={data}
								inputData={defineInputType(item.address, key[13])}
							/>
						</div>
						<div>
							<p>
								{key[15]}
								:
								{item.registered}
							</p>
							<Input
								index={index}
								data={data}
								inputData={defineInputType(item.registered, key[14])}
							/>
						</div>
						<div>
							<p>
								{key[16]}
								:
								{item.latitude}
							</p>
							<Input
								index={index}
								data={data}
								inputData={defineInputType(item.latintude, key[16])}
							/>
						</div>
						<div>
							<p>
								{key[17]}
								:
								{item.longitude}
							</p>
							<Input
								index={index}
								data={data}
								inputData={defineInputType(item.longitude, key[17])}
							/>
						</div>
						<div>
							<p>
								{key[18]}
								:
								{item.tags}
							</p>
							<Input index={index} data={data} inputData={defineInputType(item.tags, key[18])} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default App;
