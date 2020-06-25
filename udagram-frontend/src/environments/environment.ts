// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram',
  usersApiHost: 'http://a745b77b4b4bd4584a94208d293016ac-1918728908.eu-west-2.elb.amazonaws.com/api/v0',
  feedApiHost: 'http://a8930c9e95fab45d8aa207b7beea6d5d-521316871.eu-west-2.elb.amazonaws.com/api/v0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
