import { useState } from 'react';
import './App.css';
import { postBooking } from './BookingService';
import BookingForm from './BookingForm';

function App() {
	const handleAddBooking = (e) => {
		console.log(e);
	};

	return (
		<>
			<BookingForm handleAddBooking={handleAddBooking} />
			<BookingList />
		</>
	);
}

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
