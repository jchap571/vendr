import { AppState } from "../AppState.js";
import { Snack } from "../models/snack.js";
import { snackService } from "../services/snackService.js";

export class SnacksController {

  constructor() {
    console.log('The snacks controller is loaded')

    this.drawSnacks()
  }


  addQuarter() {
    console.log('Adding Quarter')
    snackService.addQuarter()
    this.drawQuarters()

  }

  drawSnacks() {
    const snacks = AppState.snacks
    let snackHTML = ''
    snacks.forEach(snack => snackHTML += snack.SnackHTMLTemplate)
    const snacksCardsElem = document.getElementById('snack-card')
    snacksCardsElem.innerHTML = snackHTML
  }

  drawQuarters() {
    console.log('drawing quarters!')
    const quarters = AppState.quarters
    const quartersElem = document.getElementById('quarterCount')
    quartersElem.innerText = quarters.toFixed(2)

  }


  buySnack(snackName) {
    snackService.buySnack(snackName)
    console.log('buying ')
    const quarters = AppState.quarters
    const quartersElem = document.getElementById('quarterCount')
    this.drawQuarters
  }

}
