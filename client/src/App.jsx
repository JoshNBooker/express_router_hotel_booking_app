import { useState, useEffect } from 'react';
import './App.css';
import { postBooking, getBookings } from './BookingService';
import BookingForm from './BookingForm';

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
					<BookingList booking={booking} />
				</ul>
			))}
		</>
	);
}

const BookingList = ({ booking }) => {
	return (
		<li>
			<p>
				<b>Booking for: </b>
				{`${booking.name.first} ` + `${booking.name.last}`}
			</p>
			<p>
				<b>Email: </b>
				{booking.email}
			</p>
			<p>
				<b>Checked in? </b>
				{booking.checkedIn ? 'Yes' : 'No'}
			</p>
			<p>
				<CheckedInToggle booking={booking} />
			</p>
		</li>
	);
};
const CheckedInToggle = ({ booking }) => {
	const updateCheckedIn = () => {
		console.log('i');
	};

	return (
		<>
			<button onClick={updateCheckedIn}>
				{booking.checkedIn ? 'Check Out' : 'Check In'}
			</button>
		</>
	);
};

export default App;
