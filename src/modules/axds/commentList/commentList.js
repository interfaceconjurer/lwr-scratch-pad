import { LightningElement, api, track } from 'lwc';

export default class CommentList extends LightningElement {
    
    @track state = {};
    @api comments;
    loading = true;
    constructor() {
        super();
        this.state.comments = [];
    }
    get isLoading () {
        return this.loading;
    }

    async connectedCallback() {
        this.state.comments = await this.comments;
        // set timeout is a hack to see the skeleton on fast loads // :REMOVE
        setTimeout(() => {
            this.loading = false;
        },500)
        
    }
}