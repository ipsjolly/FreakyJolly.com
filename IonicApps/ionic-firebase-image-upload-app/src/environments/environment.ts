// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//environment.ts
export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR_FIREBASE_CRED",
    authDomain: "YOUR_FIREBASE_CRED",
    databaseURL: "YOUR_FIREBASE_CRED",
    projectId: "YOUR_FIREBASE_CRED",
    storageBucket: "YOUR_FIREBASE_CRED",
    messagingSenderId: "YOUR_FIREBASE_CRED",
    appId: "YOUR_FIREBASE_CRED"
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
