import { useState } from 'react';
import './App.css';

function App() {
	const handleAddBooking = (e) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<>
			<BookingForm handleAddBooking={handleAddBooking} />
			<BookingList />
		</>
	);
}

const BookingForm = ({ handleAddBooking }) => {
	const [firstName, setFirstName] = useState('');
	const [secondName, setSecondName] = useState('');

	return (
		<>
			<h1>Add a Booking</h1>
			<form onSubmit={handleAddBooking}>
				<label htmlFor="firstName">Customer First Name: </label>
				<input
					type="text"
					name="firstName"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<label htmlFor="surname">Customer Second Name: </label>
				<input
					type="text"
					name="surname"
					value={secondName}
					onChange={(e) => setSecondName(e.target.value)}
				/>
				<label htmlFor="email">Customer Email: </label>
				<label htmlFor="checkedIn">Checked In: </label>
				<input type="checkbox" name="checkedIn" id="checkedIn" />
				<input type="submit" />
			</form>
		</>
	);
};

const BookingList = () => {
	return (
		<>
			<p>Booking List</p>
			<BookingCard />
		</>
	);
};
const BookingCard = () => {
	return (
		<>
			<p>Booking Card</p>
		</>
	);
};

export default App;
