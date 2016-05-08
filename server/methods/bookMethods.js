/**
 * Created by holly on 5/05/16.
 */


Meteor.methods({
	updateBookOrder( books ) {
		check( books, [{
			_id: String,
			order: Number
		}]);

		for ( let book of books ) {
			Books.update( { _id: book._id }, { $set: { order: book.order } } );
		}
	}
});

Meteor.methods({
	addBook( book ) {
		check( book, {
			title: String,
			author: String
		});

		let bookCount = Books.find().count(),
			order     = bookCount + 1;

		book.order = order;

		try {
			return Books.insert( book);
		} catch( exception ) {
			return exception;
		}
	}
});

Meteor.methods({
	deleteBook( bookId ) {
		check( bookId, String );

		try {
			Books.remove( bookId );
		} catch( exception ) {
			return exception;
		}
	}
});