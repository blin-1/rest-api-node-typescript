import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    userName: {
        type: String,
        required: 'userName is required'
    },
    verifiedEmail: {
        type: String,
		//TODO mongoose email validation
		//		
		//var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		//return emailRegex.test(email.text); // Assuming email has a text attribute
	
    },
	unverifiedEmail: {
        type: String		
    }
});