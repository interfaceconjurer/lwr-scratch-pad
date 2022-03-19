import { LightningElement, api, track } from 'lwc';

export default class Comment extends LightningElement {
    @api comment;
    @api loading;
    name;
    email;
    body;
    
    
    connectedCallback() {
        if (this.comment){
            console.log(this.comment);
            this.name = this.comment.name;
            this.email = this.comment.email;
            this.body = this.comment.body;
        }
        
    }
}