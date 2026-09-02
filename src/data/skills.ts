export interface Skill {
  name: string
  description: string
  icon: string
}

export interface SkillGroup {
  title: string
  skills: Skill[]
}

const skills: SkillGroup[] = [
  {
    title: 'Tech Stacks',
    skills: [
      {
        name: 'HTML',
        description: 'Semantic structure for accessible web pages.',
        icon: 'devicon-html5-plain colored',
      },
      {
        name: 'CSS',
        description: 'Responsive layouts and polished visual systems.',
        icon: 'devicon-css3-plain colored',
      },
      {
        name: 'JavaScript',
        description: 'Interactive behavior for modern web apps.',
        icon: 'devicon-javascript-plain colored',
      },
      {
        name: 'Typescript',
        description: 'Reliable, maintainable JavaScript at scale.',
        icon: 'devicon-typescript-plain colored',
      },
      {
        name: 'SASS',
        description: 'Organized and reusable CSS authoring.',
        icon: 'devicon-sass-original colored',
      },
      {
        name: 'React JS',
        description: 'Component-driven interfaces and experiences.',
        icon: 'devicon-react-original colored',
      },
      {
        name: 'Astro',
        description: 'Fast content-focused websites with islands.',
        icon: 'devicon-astro-plain colored',
      },
      {
        name: 'Redux',
        description: 'Predictable state management for applications.',
        icon: 'devicon-redux-original colored',
      },
      {
        name: 'Next JS',
        description: 'Full-stack React applications for production.',
        icon: 'devicon-nextjs-plain colored',
      },
      {
        name: 'Axios',
        description: 'Straightforward HTTP requests and integrations.',
        icon: 'devicon-axios-plain colored',
      },
      {
        name: 'Tailwind CSS',
        description: 'Flexible utility-first interface styling.',
        icon: 'devicon-tailwindcss-plain colored',
      },
      {
        name: 'Bootstrap',
        description: 'Practical responsive UI building blocks.',
        icon: 'devicon-bootstrap-plain colored',
      },
      {
        name: 'PHP',
        description: 'Server-side applications and web services.',
        icon: 'devicon-php-plain colored',
      },
      {
        name: 'MySQL',
        description: 'Structured data storage and querying.',
        icon: 'devicon-mysql-plain colored',
      },
      {
        name: 'Node JS',
        description: 'JavaScript runtimes for backend services.',
        icon: 'devicon-nodejs-plain colored',
      },
      {
        name: 'Laravel',
        description: 'Elegant PHP frameworks for web products.',
        icon: 'devicon-laravel-original colored',
      },
      {
        name: 'Expo',
        description: 'Rapid cross-platform mobile development.',
        icon: 'devicon-expo-original colored',
      },
    ],
  },
  {
    title: 'Tools & Services',
    skills: [
      {
        name: 'Git',
        description: 'Version control for dependable collaboration.',
        icon: 'devicon-git-plain colored',
      },
      {
        name: 'Github',
        description: 'Code hosting, review, and project workflows.',
        icon: 'devicon-github-original colored',
      },

      {
        name: 'Docker',
        description: 'Portable containers for consistent environments.',
        icon: 'devicon-docker-plain colored',
      },
      {
        name: 'Visual Studio Code',
        description: 'A focused editor for everyday engineering.',
        icon: 'devicon-vscode-plain colored',
      },
      {
        name: 'ESLint',
        description: 'Code quality checks before issues ship.',
        icon: 'devicon-eslint-plain colored',
      },
      {
        name: 'Postman',
        description: 'Testing and documenting API integrations.',
        icon: 'devicon-postman-plain colored',
      },
      {
        name: 'Ubuntu',
        description: 'A dependable Linux environment for development.',
        icon: 'devicon-linux-plain colored',
      },
    ],
  },
]

export { skills }
