import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    userName: {
        type: String,
        required: 'Enter a first name'
    },
    verifiedEmail: {
        type: String            
    },
	unverifiedEmail: {
        type: String            
    }
});