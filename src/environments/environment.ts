// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // firebase: {
  //   apiKey: '<your-key>',
  //   authDomain: '<your-project-authdomain>',
  //   databaseURL: '<your-database-URL>',
  //   projectId: '<your-project-id>',
  //   storageBucket: '<your-storage-bucket>',
  //   messagingSenderId: '<your-messaging-sender-id>'
  // },
  firebase: {
    apiKey: 'AIzaSyA8IpN9s6nybky1lTJnxTr5jBsGe1pUzOI',
    authDomain: 'tindogsprueba.firebaseapp.com',
    databaseURL: 'https://tindogsprueba.firebaseio.com',
    projectId: 'tindogsprueba',
    storageBucket: 'tindogsprueba.appspot.com',
    messagingSenderId: '669844605109'
  },

  apiURL: 'http://34.239.83.44:3000/apiv1'
};
