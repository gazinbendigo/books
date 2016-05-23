/**
 * Created by holly on 23/05/16.
 */

Template.teamMember.onCreated( () => {
	Meteor.subscribe('teamMembers');
	Meteor.subscribe('teams');
	this.teamSelector = new ReactiveVar(null);
});

Template.teamMember.helpers({
	teamMembers: function() {
		return TeamMembers.find({});
	},

	teams: function() {
		return Teams.find({});
	}
});

Template.teamMember.events({
	
});