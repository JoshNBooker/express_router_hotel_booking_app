const BookingList = ({ booking, toggleCheckedIn }) => {
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
			<button onClick={() => toggleCheckedIn(booking._id)}>
				{booking.checkedIn ? 'Check Out' : 'Check In'}
			</button>
		</li>
	);
};

export default BookingList;
