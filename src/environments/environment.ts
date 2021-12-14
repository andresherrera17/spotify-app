// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBmYzo9BitkP9KzmA0Dt37KR_9kjoH4_RM",
    authDomain: "angular-crud-7d11e.firebaseapp.com",
    databaseURL: "https://angular-crud-7d11e-default-rtdb.firebaseio.com",
    projectId: "angular-crud-7d11e",
    storageBucket: "angular-crud-7d11e.appspot.com",
    messagingSenderId: "343072713790",
    appId: "1:343072713790:web:c8d70c7301ff2675ea756f",
    measurementId: "G-H5JTG0R1Z8"
  },
  spotify: {
    grant_type: 'client_credentials',
    client_id: 'a3a961a713664aaaaa127a6a28d68d4c',
    client_secret: 'a024b478355f422a8f91721f797b63f1',
    urlToken: 'https://accounts.spotify.com/api/token'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
