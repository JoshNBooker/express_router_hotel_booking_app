import { useState } from 'react';

const BookingForm = ({ handleAddBooking }) => {
	const [formData, setFormData] = useState({
		name: {
			first: '',
			last: '',
		},
		email: '',
		checkedIn: null,
	});

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		const newFormData = { ...formData };
		if (type === 'text') {
			newFormData.name[name] = value;
		} else if (type === 'checkbox') {
			newFormData[name] = checked;
		} else {
			newFormData[name] = value;
		}
		setFormData(newFormData);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		postBooking(formData).then((data) => {
			handleAddBooking(data);
		});
		setFormData({
			name: {
				first: '',
				last: '',
			},
			email: '',
			checkedIn: null,
		});
	};

	return (
		<>
			<h1>Add a Booking</h1>
			<form onSubmit={onSubmit}>
				<label htmlFor="firstName">Customer First Name: </label>
				<input
					type="text"
					name="first"
					value={formData.name.first}
					onChange={onChange}
				/>
				<label htmlFor="surname">Customer Second Name: </label>
				<input
					type="text"
					name="last"
					value={formData.name.last}
					onChange={onChange}
				/>
				<label htmlFor="email">Customer Email: </label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={onChange}
				/>
				<label htmlFor="checkedIn">Checked In: </label>
				<input
					type="checkbox"
					name="checkedIn"
					id="checkedIn"
					value={formData.checkedIn}
					onChange={onChange}
				/>
				<input type="submit" />
			</form>
		</>
	);
};

export default BookingForm;
