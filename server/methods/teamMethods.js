/**
 * Created by holly on 15/05/16.
 */


Meteor.methods({
	addTeam(team){
		check(team, {
			name: String,
			abreviation: String
		});

		try {
			return Teams.insert(team);
		}
		catch(exception) {
			return exception;
		}
	},

	deleteTeam(teamId) {
		check(teamId, String);

		try {
			Teams.remove(teamId);
		}
		catch(exception) {
			return exception;
		}
	},

	updateTeam(team) {
		check(team , {
			_id: String,
			name: String,
			abreviation: String
		});

		try {
			Teams.update({_id: team._id}, {$set: {name: team.name, abreviation: team.abreviation}});
		}
		catch(exception) {
			return exception;
		}
	}
});

