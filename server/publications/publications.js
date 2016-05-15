/**
 * Created by holly on 6/05/16.
 */


Meteor.publish('books', function(){
	//sorts the books based on the order field of the items in the collection
	return Books.find({}, {sort: {order: 1}});
});


Meteor.publish('teams', function(){
	return Teams.find({}, {sort: {name: 1}});
});