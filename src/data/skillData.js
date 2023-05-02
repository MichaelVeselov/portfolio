import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import bootstrap from '../assets/skills/bootstrap.png';
import mui from '../assets/skills/mui.png';
import styledComponents from '../assets/skills/styled-components.png';
import tailwind from '../assets/skills/tailwind.png';
import react from '../assets/skills/react.png';
import reactRouter from '../assets/skills/react-router.png';
import redux from '../assets/skills/redux.png';

import js from '../assets/skills/js.png';
import typescript from '../assets/skills/typescript.png';

import node from '../assets/skills/node.png';
import express from '../assets/skills/express.png';
import mongo from '../assets/skills/mongo.png';

import git from '../assets/skills/git.png';
import github from '../assets/skills/github.png';

export const frontEndSkills = {
  html: {
    id: 'fe-01',
    name: 'HTML',
    image: html,
  },
  css: {
    id: 'fe-02',
    name: 'CSS',
    image: css,
  },
  bootstrap: {
    id: 'fe-03',
    name: 'Bootstrap',
    image: bootstrap,
  },
  tailwind: {
    id: 'fe-04',
    name: 'Tailwind CSS',
    image: tailwind,
  },
  styledcomponents: {
    id: 'fe-05',
    name: 'Styled Components',
    image: styledComponents,
  },
  mui: {
    id: 'fe-06',
    name: 'Material UI',
    image: mui,
  },
  react: {
    id: 'fe-07',
    name: 'React',
    image: react,
  },
  reactrouter: {
    id: 'fe-08',
    name: 'React Router',
    image: reactRouter,
  },
  redux: {
    id: 'fe-09',
    name: 'Redux',
    image: redux,
  },
};

export const backEndSkills = {
  node: {
    id: 'be-01',
    name: 'Node JS',
    image: node,
  },
  express: {
    id: 'be-02',
    name: 'Express JS',
    image: express,
  },
  mongo: {
    id: 'be-03',
    name: 'Mongo DB',
    image: mongo,
  },
};

export const programmingLanguages = {
  js: {
    id: 'pl-01',
    name: 'JS',
    image: js,
  },
  typescript: {
    id: 'pl-02',
    name: 'Typescript',
    image: typescript,
  },
};

export const commonKnowledge = {
  git: {
    id: 'cn-01',
    name: 'Git',
    image: git,
  },
  github: {
    id: 'cn-02',
    name: 'GitHub',
    image: github,
  },
};

const fetchFrontEndSkills = () =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(frontEndSkills));
  });

const fetchBackEndSkills = () =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(backEndSkills));
  });

const fetchProgrammingLanguages = () =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(programmingLanguages));
  });

const fetchCommonKnowledge = () =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(commonKnowledge));
  });

// eslint-disable-next-line
export default {
  fetchFrontEndSkills,
  fetchBackEndSkills,
  fetchProgrammingLanguages,
  fetchCommonKnowledge,
};
