import { useState, useEffect } from 'react';
import './App.css';
import { postBooking, getBookings, updateBooking } from './BookingService';
import BookingForm from './BookingForm';
import BookingList from './BookingList';

function App() {
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		getBookings().then((data) => {
			setBookings(data);
		});
	}, []);

	const handleAddBooking = (newBooking) => {
		setBookings((prevBookings) => [...prevBookings, newBooking]);
	};
	const toggleCheckedIn = (bookingId) => {
		const bookingIndex = bookings.findIndex(
			(booking) => booking._id === bookingId
		);
		if (bookingIndex !== -1) {
			const updatedBookings = [...bookings];
			updatedBookings[bookingIndex].checkedIn =
				!updatedBookings[bookingIndex].checkedIn;
			updateBooking(bookingId, {
				checkedIn: updatedBookings[bookingIndex].checkedIn,
			});
			setBookings(updatedBookings);
		}
	};

	return (
		<>
			<h1>Add a Booking</h1>
			<BookingForm
				handleAddBooking={handleAddBooking}
				postBooking={postBooking}
			/>
			<h2>Booking List</h2>
			{bookings.map((booking) => (
				<ul key={booking._id}>
					<BookingList
						booking={booking}
						toggleCheckedIn={toggleCheckedIn}
					/>
				</ul>
			))}
		</>
	);
}

export default App;
