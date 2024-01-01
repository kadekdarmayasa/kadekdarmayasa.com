import { ProjectItemProps } from '@features/project/Item'

import restoUpMockup from '@assets/images/mockup-restoup.png'
import hivemindMockup from '@assets/images/mockup-hivemind.png'
import JavaScriptLogo from '@assets/images/javascript.svg'
import WebpackLogo from '@assets/images/webpack.svg'
import JasmineLogo from '@assets/images/jasmine.svg'
import CodeceptJsLogo from '@assets/images/codeceptjs.svg'
import NextJsLogo from '@assets/images/nextjs.svg'
import TailwindCSSLogo from '@assets/images/tailwindcss.svg'
import JestLogo from '@assets/images/jest.svg'
import ExpressJsLogo from '@assets/images/expressjs.svg'
import TypescriptLogo from '@assets/images/typescript.svg'
import PrismaLogo from '@assets/images/prisma.svg'

const projects: ProjectItemProps[] = [
  {
    id: '001',
    projectMockup: restoUpMockup,
    projectName: 'RestoUp',
    projectDescription:
      '<b>RestoUp</b> is a website that lists numerous types of restaurants. The user can search for a certain restaurant, add it to their favorites list, and leave a review.  The data came from the <a href="https://restaurant-api.dicoding.dev/#/"  target="_blank" rel="noopener noreferrer" class="font-bold underline text-[#FF9858]">Dicoding Restaurant API.</a>',
    projectTheme:
      'linear-gradient(90deg, rgba(255, 152, 88, 0.50) 0.13%, rgba(255, 152, 88, 0.25) 52.08%, rgba(255, 152, 88, 0.50) 99.86%)',
    isLive: true,
    projectSourceLink: 'https://github.com/kadekdarmayasa/restaurant-catalogue',
    projectLiveLink: 'https://resto-up.netlify.app/',
    technologies: [
      {
        logo: JavaScriptLogo,
        name: 'JavaScript',
      },
      {
        logo: WebpackLogo,
        name: 'Webpack',
      },
      {
        logo: JasmineLogo,
        name: 'Jasmine',
      },
      {
        logo: CodeceptJsLogo,
        name: 'CodeceptJs',
      },
    ],
  },
  {
    id: '002',
    projectMockup: hivemindMockup,
    projectName: 'Hivemind',
    projectDescription:
      '<b>Hivemind</b> is a <b>full-service digital agency</b> platform that aids companies in growing their online presence by offering services tailored to their needs.',
    projectTheme:
      'linear-gradient(90deg, rgba(43, 59, 229, 0.50) 0.13%, rgba(43, 59, 229, 0.25) 52.08%, rgba(43, 59, 229, 0.50) 99.86%)',
    isLive: false,
    projectSourceLink: 'https://github.com/kadekdarmayasa/hivemind',
    technologies: [
      {
        logo: NextJsLogo,
        name: 'NextJs',
      },
      {
        logo: TailwindCSSLogo,
        name: 'TailwindCSS',
      },
      {
        logo: JestLogo,
        name: 'Jest',
      },
      {
        logo: ExpressJsLogo,
        name: 'ExpressJs',
      },
      {
        logo: TypescriptLogo,
        name: 'Typescript',
      },
      {
        logo: PrismaLogo,
        name: 'Prisma',
      },
    ],
  },
]

export { projects }
