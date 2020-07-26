import 'firebase/auth';

import * as f from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAkHkTUbCUZZT1qEPEufCBF3qrd1_mCwFA",
  authDomain: "product-butter-and-jelly.firebaseapp.com",
  databaseURL: "https://product-butter-and-jelly.firebaseio.com",
  projectId: "product-butter-and-jelly",
  storageBucket: "product-butter-and-jelly.appspot.com",
  messagingSenderId: "488822632159",
  appId: "1:488822632159:web:898ea5e2227c46d1c9836a",
  measurementId: "G-HX6H8C5PK5"
};

class Fire {
  static instance: Fire;
  app!: f.app.App;
  constructor(){
   if(! Fire.instance){
     this.app = f.initializeApp( firebaseConfig );
     Fire.instance = this;
   }

   return Fire.instance;
  }

 //rest is the same code as preceding example

}

const fire = new Fire();
Object.freeze(fire);

export default fire;