import * as mongoose from 'mongoose';
import * as mailer from 'nodemailer';
import { ContactSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema, 'Users');

export class ContactController{



    public addUnregisteredContact (req: Request, res: Response) {                
        let newContact = new Contact(req.body); //userName
		newContact.unverifiedEmail=req.body.email;
		newContact.verifiedEmail='';
		//this.sendVerificationEmail(req);
        newContact.save((err, contact) => {
            if (err) {				
                res.send(err);
            }else{
				res.json(contact);
				
				let transporter = mailer.createTransport({
					host: 'smtp.gmail.com',
					port: 587,
					secure: false, // true for 465, false for other ports
					auth: {
						user: "zonamailbox2@gmail.com", 
						pass: "Aa123456!"
					}
				});

 				let vlink = '<br></br>' 
					+ '<a href="https://localhost:3000/verify?id='
					+ newContact._id 
					+ '>Verify</a>';
					
				let mailOptions = {
					from: '"Yuri 👻" <example@gmail.com>', // sender address
					to: newContact.unverifiedEmail,
					subject: 'Please verify the registration', // Subject line
					text: 'Please click on the link to finish the registration',
					html:  vlink
				};
				transporter.sendMail(mailOptions, (error, info) => {
					if (error) {
						return console.log(error);
					}
					console.log('Message sent: %s', info.messageId);
				});				
			}

			
        });
		
	}
	
 	public verifyContact (req: Request){
		//TODO
		console.log('verification')
    }

    public getContacts (req: Request, res: Response) {           
        Contact.find({}, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getContactWithID (req: Request, res: Response) {           
        Contact.findById(req.params.contactId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public updateContact (req: Request, res: Response) {           
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            
			console.log("updatedContact", contact);
			if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public deleteContact (req: Request, res: Response) {           
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    }
	
	//calling this does not work for some reason - so its moved ditrectly into callback
	//disturbing...
	private sendVerificationEmail = (req: Request) => {
		
		let transporter = mailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: "y.monsoon", 
				pass: "Martel2148"
			}
		});

		// setup email data with unicode symbols
		let mailOptions = {
			from: '"Fred Foo 👻" <foo@example.com>', // sender address
			to: 'bar@example.com, blin_1@yahoo.com', // list of receivers
			subject: 'Hello ✔', // Subject line
			text: 'Click the link to verify your account', // plain text body
			html: '<b>Hello world?</b>' // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message sent: %s', info.messageId);
		});       
    } 
    
}