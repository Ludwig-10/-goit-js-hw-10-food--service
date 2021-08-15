import gallery from './menu.json';

import menuTemplate from './templates/menu.hbs';

const galleryRef = document.querySelector('.js-menu');

const markup = menuTemplate(gallery);
galleryRef.insertAdjacentHTML('beforeend', markup);

// "devDependencies": {
//     "@pnotify/core": "^5.2.0",
//     "@pnotify/desktop": "^5.2.0",
//     "@pnotify/mobile": "^5.2.0",
//     "parcel-bundler": "^1.12.5",
//     "parcel-plugin-handlebars-precompile": "^1.0.2",



//   },