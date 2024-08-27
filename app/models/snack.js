export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }


  getSnackHTMLTemplate() {
    return `
     <section class="row d-flex">
        <div class="col-2 card m-5 bg-dark text-light">
          <img src="https:placehold.it/300x300" alt="">
          Item 1
          <button>Buy Snack</button>
        </div>

        <div class="col-2 card m-5 bg-dark text-light">
          <img src="https:placehold.it/300x300" alt="">
          Item 2
          <button>Buy Snack</button>
        </div>
        <div class="col-2 card m-5 bg-dark text-light">
          <img src="https:placehold.it/300x300" alt="">
          Item 3
          <button>Buy Snack</button>
        </div>
      </section>



      <section class="row d-flex">
        <div class="col-2 card m-5 bg-dark text-light">
          <img src="https:placehold.it/300x300" alt="">
          Item 1
          <button>Buy Snack</button>
        </div>

        <div class="col-2 card m-5 bg-dark text-light">
          <img src="https:placehold.it/300x300" alt="">
          Item 2
          <button>Buy Snack</button>
        </div>
        <div class="col-2 card m-5 bg-dark text-light">
          <img src="https:placehold.it/300x300" alt="">
          Item 3
          <button>Buy Snack</button>
        </div>
      </section>



      <section class="row d-flex">
        <div class="col-2 card m-5 bg-dark text-light">
          <img src="https:placehold.it/300x300" alt="">
          Item 1
          <button>Buy Snack</button>
        </div>

        <div class="col-2 card m-5 bg-dark text-light">
          <img src="https:placehold.it/300x300" alt="">
          Item 2
          <button>Buy Snack</button>
        </div>
        <div class="col-4 m-5 bg-dark text-light">
          <div class="card">
            <span>
              Total Monies:
            </span>
          </div>
        </div>
      </section>
        `
  }
}