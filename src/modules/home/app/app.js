import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    async fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
        const data = await response.json();
        data.forEach(i => {i.image = 'https://images.unsplash.com/photo-1644847381469-2be5141bac71?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0Njg5MjE0MQ&ixlib=rb-1.2.1&q=85';});
        return await data;
    }

    get data() {
        this._data = this.fetchData()
        return this._data;
    }
}
