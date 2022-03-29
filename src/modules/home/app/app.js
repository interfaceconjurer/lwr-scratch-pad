import { LightningElement } from 'lwc'

export default class App extends LightningElement {
  data = []
  loading = true

  async fetchData() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments?postId=1'
    )
    const data = await response.json()
    data.forEach(
      (i, index) =>
        (i.image = `https://source.unsplash.com/random/150x150/?${index}`)
    )
    return data
  }

  async connectedCallback() {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // delay for 1 second to show loading (remove)

    this.data = await this.fetchData()
    this.loading = false
  }
}
