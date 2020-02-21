// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxx", //put your firebase key!!!!!
    authDomain: "spentcrud.firebaseapp.com",
    databaseURL: "https://spentcrud.firebaseio.com",
    projectId: "spentcrud",
    storageBucket: "spentcrud.appspot.com",
    messagingSenderId: "366193560162",
    appId: "1:366193560162:web:8f4e0da0b8be3c047b1f3b",
    measurementId: "G-Y2G07RFV5K"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
