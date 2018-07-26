import {Request, Response, NextFunction} from "express";
import { ContactController } from "../controllers/crmController";

export class Routes { 
    
    public contactController: ContactController = new ContactController() 
    
    public routes(app): void {   
        
		//Register form - default
        app.route('/')
        .get((req: Request, res: Response) => { 
			//TODO use pug		
            res.status(200).send(
				'<form method="post" action="/register" novalidate>'
				+'  <label for="username">Name</label>'
				+'  <div class="form-field">'
				+'    <input class="input" id="username" name="userName" value="" />'
				+'  </div>'
				+'  <label for="email">eMail</label>'
				+'  <div class="form-field">'
				+'    <input class="input" name="email" name="email" type="email" value="" />'
				+'  </div>'
				+'  <div class="form-actions">'
				+'    <button class="btn" type="submit">Register</button>'
				+'  </div>'
				+'</form>'
            )
        })
        
        app.route('/list') // to verify inserts
			.get(this.contactController.getContacts)  		;
		
		app.route('/register') 		
			.post(this.contactController.addNewContact);

        app.route('/contact/:contactId')
			.put(this.contactController.updateContact)
			// icing - not used
			.get(this.contactController.getContactWithID) // get specific contact
			.delete(this.contactController.deleteContact)

    }
}