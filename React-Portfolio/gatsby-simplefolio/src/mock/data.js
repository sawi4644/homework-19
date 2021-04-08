import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sara Wilson | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sara Wilson',
  subtitle: 'Full-stack developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hi! Welcome to my website. Built entirely with React and implementing Gatsby. I am a current Northwestern Full-Stack Developer Student. ',
  paragraphTwo:
    'Oustide of coding, I have a full-time position as an Account Coordinator at TPN. I love working within the creative industry whether that be advertising, designing, front-end, back-end, personal, or client focused. I would love the chance to connect and come up with some great ideas. ',
  paragraphThree:
    'Feel free to look around and inspect how things were built! And please, check out my resume and projects below! ',
  resume: 'https://sawi4644.github.io/Assets/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lyric-listeners.png',
    title: 'Lyric Lysteners',
    info:
      'A website created for those who want a simple ad free, application to quickly search for lyrics',
    info2:
      'Implemented QR code scanning to showcase skills around adapting with digital forward business models. ',
    url: 'https://pete-scale.github.io/lyric-finder/',
    repo: 'https://github.com/Pete-Scale/lyric-finder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'code-closet.png',
    title: 'Code Closet',
    info:
      'Website designed with client business implications in mind. This is an application that allows a user to add items to their cart, check out, and view their purchased items. Check out the live site for more!',
    info2: 'Hosted and project managed on personal Github. Deployment VIA Heroku.',
    url: 'https://obscure-scrubland-41344.herokuapp.com/',
    repo: 'https://github.com/sawi4644/CodeCloset-P2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'burger-app.png',
    title: 'Make- Devour- Burger',
    info:
      'An application made with node, express, express handle bars and mySQL that allows a user to create a burger and then devour it.',
    info2: '',
    url: '',
    repo: 'https://github.com/sawi4644/make-devour-burger', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'schedule.png',
  //   title: 'Work Day Scheduler',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sarawilson1292/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sawi4644',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
