import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	//if(!Meteor.users.find()){
		Accounts.createUser({
		    	username:"admin",
		        password: "admin",
		        profile:{
					visible:0,
		        	full_name: "admin",
		        	email: "admin@prospero.com",
		        	institution: "Prospero",
		       		telephone: "091 / 555 - 007"
		        }
		});
	//}
});
