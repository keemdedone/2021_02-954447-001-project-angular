// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  googleConfiguration: {
    client_id: '989210212784-2cmbma21cht0a1aev6o84shrgabr8map.apps.googleusercontent.com',
    client_secret: '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',
    scopes: [
      'https://www.googleapis.com/auth/classroom.courses',
      'https://www.googleapis.com/auth/classroom.courses.readonly',
      'https://www.googleapis.com/auth/classroom.rosters',
    ],
    redirect_uri:
      'http://localhost:4200/api/authorization',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
