import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Snack } from "./models/snack.js"

class ObservableAppState extends EventEmitter {

  /**@type {Snack} */
  snacks = [
    new Snack({ name: 'Brussel Sprouts', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: 'Milk', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: 'Meatballs', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: 'Protein Drink', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: 'Protein Bowl', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: 'Kebabs', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: 'Noodle Cup', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: 'Meat and Veggie Wrap', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
  ]


}

export const AppState = createObservableProxy(new ObservableAppState())