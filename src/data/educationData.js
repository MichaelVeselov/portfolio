const basicEducation = [
  {
    id: 'be-01',
    date: '1980 - 1990',
    title: 'Gymnasium N 274',
    subtitle: 'St. Petersburg, Russia',
    description:
      'Special education in mathematics and computer science.\n Graduation: Abitur (general qualification for university entrance).\n Grade: 1.6',
  },
  {
    id: 'be-02',
    date: '1990 - 1995',
    title: 'State University of Engineering and Economics',
    subtitle: 'St. Petersburg, Russia',
    description: 'Diploma: economic engineer.\n Grade: 1.7',
  },
];

const additionalEducation = [
  {
    id: 'ae-01',
    date: '2000 - 2001',
    title: 'Course "Network administrator"',
    subtitle: 'Leipzig, Germany',
    description:
      'One-year full-time course in network administrator of heterogeneous networks. Microsoft and Unix environment.',
    length: '2032',
    certificate: '',
  },
  {
    id: 'ae-02',
    date: '2022',
    title: 'Course "Basic JavaScript with practice and projects"',
    subtitle: 'Udemy',
    description:
      'Fundamentals of JavaScript, Arrays and Objects, Working in the Browser, Events in JavaScript, JavaScript Libraries, Classes and Object Oriented Programming, Asynchronous and Synchronous Programming, Http Requests, REST API, NodeJS.',
    length: '12',
    certificate: 'UC-178d8a42-d6c5-423d-8d54-bc6b26e008d1',
  },
  {
    id: 'ae-03',
    date: '2022',
    title: 'Course "10 Web Developer Tools"',
    subtitle: 'Udemy',
    description:
      'Web basics, Terminal, Nano and Vim, VS Code, SSH, Git, GitHub, NodeJS, NPM and Yarn, ParcelJS, Gulp, Webpack.',
    length: '11',
    certificate: 'UC-a7565a47-6978-459d-acad-2152bdb83013',
  },
  {
    id: 'ae-04',
    date: '2022',
    title: 'Course "React from scratch + 3 apps"',
    subtitle: 'Udemy',
    description:
      'Basic React skills, Advanced React skills, Built-in React hooks and Custom React hooks, Routing, Creating a single page application.',
    length: '13',
    certificate: 'UC-b30e4871-03f3-4c2f-9b1f-3a6a3a494d67',
  },
  {
    id: 'ae-05',
    date: '2022',
    title: 'Course "The Redux library for managing the state of React apps"',
    subtitle: 'Udemy',
    description:
      'Redux basic skills, Redux advanced skills, Asynchronous work with Redux, Different options for the structure of the application, 2 apps.',
    length: '11',
    certificate: 'UC-a96a8fe1-92ac-4716-ae2d-df702311b343',
  },
  {
    id: 'ae-06',
    date: '2023',
    title: 'Course "Full course JavaScript + React"',
    subtitle: 'Udemy',
    description:
      'Fundamentals of programming and algorithms, the basics of object-oriented programming, basic concepts and principles of JavaScript, Git and GitHub, React + 4 applications, architectural approaches to building web applications, Redux, Redux ToolKit, RTK Query.',
    length: '67',
    certificate: 'UC-dc856fa4-c841-47cd-bd03-5adcc85458e7',
  },
  {
    id: 'ae-07',
    date: '2023',
    title: 'Course "Practical JavaScript (advanced level)"',
    subtitle: 'Udemy',
    description:
      'Continuation of the previous course, practical consolidation of knowledge and skills, an example of creating your own UI-library.',
    length: '24',
    certificate: 'UC-8de1c9a7-f7f5-4a8b-8c62-98afbef60284',
  },
  {
    id: 'ae-08',
    date: '2023',
    title: 'Course "Typescript for modern development"',
    subtitle: 'Stepik',
    description:
      'Types, interfaces and type aliases, arrays and tuples, union and enum, generics, typeguards, built-in TypeScript utilities, type mapping and template literals, typing React and Redux applications.',
    length: '12',
    certificate: '',
  },
  {
    id: 'ae-10',
    date: '2022 - 2023',
    title: 'Course "Frontend Developer"',
    subtitle: 'Result School',
    description:
      'Eight-month online course in frontend developer. Following themes and technologies are in the course program: HTML, CSS, JavaScript, Git and GitHub, React, React Router, Redux, Firebase, NodeJS, Express JS, MongoDB.',
    length: '720',
    certificate: '',
  },
];

const fetchBasicEducation = () =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(basicEducation));
  });

const fetchAdditionalEducation = () =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(additionalEducation));
  });

// eslint-disable-next-line
export default {
  fetchBasicEducation,
  fetchAdditionalEducation,
};
