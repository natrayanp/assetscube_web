// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const apiurls = {
  // Common routes for all
  all_api_url: 'http://127.0.0.1:8081'/*'https://wuob9hr3o3.execute-api.ap-south-1.amazonaws.com/dev'*/,
  // Individual routes
  url_regis: 'http://127.0.0.1:8081',
  url_acsignupcallbk: 'http://127.0.0.1:8081',
};

export const environment = {
  production: false,
  // url_<screen + Functionality>
  url_regis: apiurls.all_api_url,
  endpt_regis : 'signup',
  url_acsignupcallbk: apiurls.all_api_url,
  endpt_acsignupcallbk : 'callback',
};


export const installation = {
  entityid: 'ASSETSCUBE',
  countryid: 'IN'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
