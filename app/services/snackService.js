import { AppState } from "../AppState.js";
import { SnacksController } from "../controllers/SnacksController.js";

class SnackService {
  addQuarter() {
    AppState.quarters += .25
    console.log('quarter added!', AppState.quarters)
  }

  buySnack(snackName) {
    const snackToBuy = AppState.snacks.find(snack => snackName.price)
    if (AppState.quarters >= snackName.price) {
      console.log('buying', `${snackName}`)
      AppState.quarters = AppState.quarters - snackName.price


    }
    // else
    // window.alert('You have no monies!')

  }
}



export const snackService = new SnackService()