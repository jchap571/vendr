import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Snack } from "./models/snack.js"

class ObservableAppState extends EventEmitter {
  quarters = 0


  /**@type {Snack[]} */
  snacks = [
    new Snack({ name: 'Brussel Sprouts', price: 2.50, imgUrl: 'https://images.unsplash.com/photo-1607189760730-a330bf941e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnJ1c3NlbCUyMFNwcm91dHN8ZW58MHx8MHx8fDA%3D' }),
    new Snack({ name: 'Milk', price: 1.00, imgUrl: 'https://plus.unsplash.com/premium_photo-1683121595979-870ded53a3c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlsa3xlbnwwfHwwfHx8MA%3D%3D' }),
    new Snack({ name: 'Meatballs', price: 4.50, imgUrl: 'https://plus.unsplash.com/premium_photo-1664478291780-0c67f5fb15e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE1lYXRiYWxsc3xlbnwwfHwwfHx8MA%3D%3D' }),
    new Snack({ name: 'Protein Drink', price: 1.50, imgUrl: 'https://images.unsplash.com/photo-1645516957558-c165fd13be62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFByb3RlaW4lMjBEcmlua3xlbnwwfHwwfHx8MA%3D%3D' }),
    new Snack({ name: 'Protein Bowl', price: 5.50, imgUrl: 'https://plus.unsplash.com/premium_photo-1664648005444-1979e7a68130?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvdGVpbiUyMEJvd2x8ZW58MHx8MHx8fDA%3D' }),
    new Snack({ name: 'Kebabs', price: 5.50, imgUrl: 'https://images.unsplash.com/photo-1605908580297-f3e1c02e64ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2ViYWJzfGVufDB8fDB8fHww' }),
    new Snack({ name: 'Noodle Cup', price: 2.50, imgUrl: 'https://images.unsplash.com/photo-1527027556693-f5381a7c77bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE5vb2RsZSUyMEN1cHxlbnwwfHwwfHx8MA%3D%3D' }),
    new Snack({ name: 'Meat and Veggie Wrap', price: 3.50, imgUrl: 'https://images.unsplash.com/photo-1585238342107-49a3cdace47f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVhdCUyMGFuZCUyMFZlZ2dpZSUyMHdyYXB8ZW58MHx8MHx8fDA%3D' }),
  ]


}

export const AppState = createObservableProxy(new ObservableAppState())