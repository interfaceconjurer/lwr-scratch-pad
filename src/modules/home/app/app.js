import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    async fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
        const data = await response.json();
        return await data;
    }

    get data() {
        this._data = this.fetchData()
        return this._data;
    }
}