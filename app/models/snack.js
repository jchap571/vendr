export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }


  get SnackHTMLTemplate() {
    return /*html*/ `
    <div class="col-3 text-center card m-1 bg-dark text-light snack-card">
    <div class="text-center">
      <img class="snack-img" src="${this.imgUrl}" alt="">
    </div>
    <p>${this.name}</p>
    <p>${this.price.toFixed(2)}</p>
    <button onclick="app.SnacksController.buySnack('snackName')">Buy Snack</button>
  </div>
        `
  }
}