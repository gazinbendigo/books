/**
 * Created by holly on 5/05/16.
 */

BlazeLayout.setRoot('body');

FlowRouter.route('/', {
	name: 'index',
	action: function() {
		BlazeLayout.render("baseLayout", {header: 'header', main: 'homePage', footer: 'footer'});
	}
});

FlowRouter.route('/books', {
	name: 'books',
	action: function() {
		BlazeLayout.render("baseLayout", {header: 'header', main: 'books', footer: 'footer'});
	}
});

FlowRouter.route('/teams', {
	name: 'teams',
	action: function() {
		BlazeLayout.render("baseLayout", {header: 'header', main: 'teams', footer: 'footer'});
	}
});