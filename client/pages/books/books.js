/**
 * Created by holly on 5/05/16.
 */



let initSortable = ( sortableClass ) => {
	let sortableList = $( sortableClass );
	sortableList.sortable( 'destroy' );
	sortableList.sortable();
	sortableList.sortable().off( 'sortupdate' );
	sortableList.sortable().on( 'sortupdate', () => {
		updateIndexes( '.sortable' );
	});
};

let updateIndexes = ( sortableClass ) => {
	let items = [];

	$( `${sortableClass} li` ).each( ( index, element ) => {
		items.push( { _id: $( element ).data( 'id' ), order: index + 1 } );
	});

	Meteor.call( 'updateBookOrder', items, ( error ) => {
		if ( error ) {
			console.log( error.reason );
		}
	});
};

Template.books.onCreated( () => {
	//let template = new Template.instance();
	Meteor.subscribe('books', function(){
		initSortable('.sortable');
	});

	// template.subscribe( 'books', () => {
	// 	initSortable( '.sortable' );
	// });
});

Template.books.helpers({
	books: function() {
		return Books.find({});
	}
});

Template.books.events({
	'submit #add-book' ( event, template ) {
		event.preventDefault();

		let book = {
			title: template.find( '[name="bookTitle"]' ).value,
			author: template.find( '[name="bookAuthor"]' ).value
		};

		Meteor.call( 'addBook', book, ( error ) => {
			if ( error ) {
				console.log( error );
			} else {
				$( event.target ).get(0).reset();
				$( '[name="bookTitle"]' ).focus();
				initSortable( '.sortable' );
			}
		});
	},
	'click .delete-book' ( event, template ) {
		if ( confirm( 'Are you sure? This is permanent!' ) ) {
			Meteor.call( 'deleteBook', this._id, ( error ) => {
				if ( error ) {
					console.log( error );
				} else {
					updateIndexes( '.sortable' );
				}
			});
		}
	}
});