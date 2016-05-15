/**
 * Created by holly on 15/05/16.
 */

Template.teams.onCreated(() => {
	Meteor.subscribe('teams');
});

Template.teams.helpers({
	teams: function() {
		return Teams.find({}, {sort: {name: 1}});
	}
});

Template.teams.events({
	'submit #add-team' ( event, template ) {
		event.preventDefault();

		let book = {
			name: template.find( '[name="teamName"]' ).value,
			abreviation: template.find( '[name="teamAbreviation"]' ).value
		};

		Meteor.call( 'addTeam', team, ( error ) => {
			if ( error ) {
				console.log( error );
			} else {
				$( event.target ).get(0).reset();
				$( '[name="teamName"]' ).focus();
			}
		});
	},
	'click .delete-team' ( event, template ) {
		if ( confirm( 'Are you sure? This is permanent!' ) ) {
			Meteor.call( 'deleteTeam', this._id, ( error ) => {
				if ( error ) {
					console.log( error );
				} else {
					
				}
			});
		}
	}
});