/**
 * Created by holly on 6/05/16.
 */

Meteor.startup(function(){
	Books.remove({});
	Teams.remove({});

	if(Books.find({}).count() === 0) {
		Books.insert({
			title: 'Eating Cookies', author: 'Cookie Monster', order: 1
		});

		Books.insert({
			title: 'Seeking Wisdom', author: 'Peter Bevelin', order: 2
		});

		Books.insert({
			title: 'The Art of Worldly Wisdom', author: 'Baltasar Gracián', order: 3
		});
	}

	if(Teams.find({}).count() === 0) {
		Teams.insert({
			name: 'Integration Core Competency', abreviation: 'ICC'
		});

		Teams.insert({
			name: 'IT Database Services', abreviation: 'DBS'
		});
	}

})
