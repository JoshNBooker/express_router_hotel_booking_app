const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {
	const router = express.Router();

	router.get('/', (req, res) => {
		collection
			.find()
			.toArray()
			.then((docs) => res.json(docs))
			.catch((err) => {
				console.error(err);
				res.status(500);
				res.json({ status: 500, error: err });
			});
	});

	router.post('/', (req, res) => {
		const newBooking = req.body;
		collection
			.insertOne(newBooking)
			.then((docs) => res.json(docs.ops[0]))
			.catch((err) => {
				console.error(err);
				res.status(500);
				res.json({ status: 500, error: err });
			});
	});

	router.put('/:id', (req, res) => {
		const someId = req.params.id;
		collection
			.updateOne(
				{
					_id: ObjectID(someId),
				},
				{ $set: req.body }
			)
			.then((result) => {
				if (result.modifiedCount === 1) {
					res.json({ message: 'update successful' });
				} else {
					res.status(404).json({ message: 'Document not found' });
				}
			})
			.catch((error) => {
				console.error(error);
				res.status(500).json({ message: 'Internal server error' });
			});
	});
	return router;
};

module.exports = createRouter;
