import countries from '../assets/projects/countries.png';
import dashboard from '../assets/projects/dashboard.jpg';
import marvel from '../assets/projects/marvel.png';
import food from '../assets/projects/food.png';
import currencyconverter from '../assets/projects/currencyconverter.png';
import users from '../assets/projects/users.png';
import quiz from '../assets/projects/quiz.png';
import modal from '../assets/projects/modal.png';
import shop from '../assets/projects/shop.png';
import timer from '../assets/projects/timer.png';
import ipfinder from '../assets/projects/ipfinder.jpg';
import movies from '../assets/projects/movies.png';
import slider from '../assets/projects/slider.png';
import photocards from '../assets/projects/photocards.png';
import chessbooks from '../assets/projects/chessbooks.png';
import tesla from '../assets/projects/tesla.png';
import spotify from '../assets/projects/spotify.png';
import newssite from '../assets/projects/newssite.png';
import heroadminpanel from '../assets/projects/hero-admin-panel.png';
import devfinder from '../assets/projects/devfinder.png';

import {
  frontEndSkills,
  backEndSkills,
  programmingLanguages,
  commonKnowledge,
} from './skillData';

const {
  html,
  css,
  bootstrap,
  tailwind,
  styledcomponents,
  mui,
  react,
  reactrouter,
  redux,
} = frontEndSkills;

const { node, express, mongo } = backEndSkills;

const { js, typescript } = programmingLanguages;

const { git, github } = commonKnowledge;

export const projectList = [
  {
    id: 'p-01',
    name: 'Countries',
    image: countries,
    description:
      'Filterable and searchable country search apps with external API. It is possible to see both detailed information on the selected country and a list of its neighbors. The list of neighbors allows you to select a country and go to its detailed information. The application was developed using: Vite, React, React Router, React Select, Redux Toolkit, Styled components, Lodash, Axios.',
    techs: [
      html,
      css,
      styledcomponents,
      react,
      reactrouter,
      redux,
      js,
      git,
      github,
    ],
    github: 'https://github.com/MichaelVeselov/react-rtk-countries-app',
    deploy: 'https://mve-react-rtk-countries.vercel.app/',
  },
  {
    id: 'p-02',
    name: 'Dashboard',
    image: dashboard,
    description:
      'Dashboard with the ability to filter by various criteria and save the state in the local storage. The application was developed using: Vite, React, Redux, Redux Persist.',
    techs: [html, css, react, redux, js, git, github],
    github: 'https://github.com/MichaelVeselov/react-rtk-dashboard-app',
    deploy: 'https://mve-react-rtk-dashboard-app.vercel.app/',
  },
  {
    id: 'p-03',
    name: 'Marvel',
    image: marvel,
    description:
      'An app with external API for finding comics and heroes from the Marvel Universe.  You can browse both lists of heroes and comics, as well as information on individual characters or comics. It is also possible to search by character. The application was developed using: Vite, React, React Router, Formik and Yup.',
    techs: [html, css, react, reactrouter, js, git, github],
    github: 'https://github.com/MichaelVeselov/react-marvel-functions',
    deploy: 'https://mve-react-marvel-functions.vercel.app/',
  },
  {
    id: 'p-04',
    name: 'Food',
    image: food,
    description:
      'The app with external API allows you to get a list of all dishes, select a category and get a list of all dishes within one category. A page with a detailed description of the recipe and a link to YouTube is implemented for an individual dish. The application was developed using: Vite, React, React Router, Materialize CSS.',
    techs: [html, css, mui, react, reactrouter, js, git, github],
    github: 'https://github.com/MichaelVeselov/react-food',
    deploy: 'https://mve-react-food.vercel.app/',
  },
  {
    id: 'p-05',
    name: 'Currency Converter',
    image: currencyconverter,
    description:
      'Currency converter with external API for 4 currencies: USD, EUR, GBP and RUB. The application was developed using: Vite, React, SASS.',
    techs: [html, css, react, js, git, github],
    github: 'https://github.com/MichaelVeselov/react-currency-converter',
    deploy: 'https://mve-react-currency-converter.vercel.app/',
  },
  {
    id: 'p-06',
    name: 'Users',
    image: users,
    description:
      'The application using the external API allows you to get a list of users, search for a user, select one or more users, and send them an invitation. The application was developed using: Vite, React, SASS.',
    techs: [html, css, react, js, git, github],
    github: 'https://github.com/MichaelVeselov/react-users',
    deploy: 'https://mve-react-users.vercel.app/',
  },
  {
    id: 'p-07',
    name: 'Quiz',
    image: quiz,
    description:
      'The simple quiz application using the external API. The application was developed using: Vite, React, SASS.',
    techs: [html, css, react, js, git, github],
    github: 'https://github.com/MichaelVeselov/react-quiz',
    deploy: 'https://mve-react-quiz.vercel.app/',
  },
  {
    id: 'p-08',
    name: 'Modal',
    image: modal,
    description:
      'A simple modal window with animation. The application was developed using: Vite, React, SASS.',
    techs: [html, css, react, js, git, github],
    github: 'https://github.com/MichaelVeselov/react-modal',
    deploy: 'https://mve-react-modal.vercel.app/',
  },
  {
    id: 'p-09',
    name: 'Shop',
    image: shop,
    description:
      'Simple shop application using external API, Context and Reducer with a list of all items and shopping cart with the function of recalculation of the order amount + local storage. The application was developed using: Vite, React, Context, Reducer, Materialize CSS.',
    techs: [html, css, mui, react, js, git, github],
    github: 'https://github.com/MichaelVeselov/react-modal',
    deploy: 'https://mve-react-modal.vercel.app/',
  },
  {
    id: 'p-10',
    name: 'Timer',
    image: timer,
    description:
      'A simple timer app using Reducer and Local storage. The application was developed using: Vite, React, Reducer.',
    techs: [html, css, react, js, git, github],
    github: 'https://github.com/MichaelVeselov/react-timer-reducer',
    deploy: 'https://mve-react-timer-reducer.vercel.app/',
  },
  {
    id: 'p-11',
    name: 'IP-Finder',
    image: ipfinder,
    description:
      'Application for searching the physical address by ip-address using external API and Leaflet library. The application was developed using: Vite, JS, Leaflet.',
    techs: [html, css, js, git, github],
    github: 'https://github.com/MichaelVeselov/js-ip-finder',
    deploy: 'https://mve-ip-tracker-js.vercel.app/',
  },
  {
    id: 'p-12',
    name: 'Movies',
    image: movies,
    description:
      'An application to search and filter movies using an external API. The application was developed using: Vite, React, Materialize CSS.',
    techs: [html, css, mui, react, js, git, github],
    github: 'https://github.com/MichaelVeselov/react-movies-functions',
    deploy: 'https://mve-react-movies-functions.vercel.app/',
  },
  {
    id: 'p-13',
    name: 'Slider',
    image: slider,
    description:
      'Slider with vertical displacement of images relative to each other. The application was developed using: HTML, CSS, JS.',
    techs: [html, css, js, git, github],
    github: 'https://github.com/MichaelVeselov/js-slider-var',
    deploy: 'https://mve-slider-var-js.vercel.app/',
  },
  {
    id: 'p-14',
    name: 'Photocards',
    image: photocards,
    description:
      'Horizontal slider with incomplete hiding of images. The application was developed using: HTML, CSS, JS.',
    techs: [html, css, js, git, github],
    github: 'https://github.com/MichaelVeselov/js-photocards',
    deploy: 'https://mve-photocards-js.vercel.app/',
  },
  {
    id: 'p-15',
    name: 'Chessbooks',
    image: chessbooks,
    description:
      'Chess book store page using Tailwind CSS. The application was developed using: HTML, Tailwind CSS, JS.',
    techs: [html, css, tailwind, js, git, github],
    github: 'https://github.com/MichaelVeselov/tailwind-chess-books',
    deploy: 'https://mve-tailwind-chess.vercel.app/',
  },
  {
    id: 'p-16',
    name: 'Tesla',
    image: tesla,
    description:
      'Tesla page using Tailwind CSS. The application was developed using: HTML, Tailwind CSS.',
    techs: [html, css, tailwind, git, github],
    github: 'https://github.com/MichaelVeselov/tailwind-tesla',
    deploy: 'https://mve-tailwind-tesla.vercel.app/',
  },
  {
    id: 'p-17',
    name: 'Spotify',
    image: spotify,
    description:
      'Spotify page using Tailwind CSS. The application was developed using: HTML, Tailwind CSS.',
    techs: [html, css, tailwind, git, github],
    github: 'https://github.com/MichaelVeselov/tailwind-spotify',
    deploy: 'https://mve-tailwind-spotify.vercel.app/',
  },
  {
    id: 'p-18',
    name: 'News site',
    image: newssite,
    description:
      'News site page using Tailwind CSS. The application was developed using: HTML, Tailwind CSS.',
    techs: [html, css, tailwind, git, github],
    github: 'https://github.com/MichaelVeselov/tailwind-site-example',
    deploy: 'https://mve-tailwind-pagelayout.vercel.app/',
  },
  {
    id: 'p-19',
    name: 'Hero Admin Panel',
    image: heroadminpanel,
    description:
      'Admin panel to add and display characters with different filters using React, Redux Toolkit and RTK Query. The application was developed using: Vite, React, React Transition Group, Redux Toolkit, RTK Query, Bootstrap, SASS, JSOn-Server.',
    techs: [html, css, bootstrap, react, redux, js, git, github],
    github:
      'https://github.com/MichaelVeselov/react-rtk-query-hero-admin-panel',
    deploy: '',
  },
  {
    id: 'p-20',
    name: 'Github user finder',
    image: devfinder,
    description:
      'The app using react and typescript, allows you to search by name for github users, display their information, and switch between light and dark themes. The application was developed using: React and Typescript.',
    techs: [html, css, react, js, typescript, git, github],
    github: 'https://github.com/MichaelVeselov/react-github-user-search-app',
    deploy: 'https://mve-react-devfinder.vercel.app/',
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(projectList));
  });

const getById = (id) => {
  const project = projectList.find((project) => project.id === id);

  return new Promise((resolve) => {
    window.setTimeout(() => resolve(project));
  });
};

// eslint-disable-next-line
export default {
  fetchAll,
  getById,
};
