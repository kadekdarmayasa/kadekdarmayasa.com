import Technology from './Technology'

interface ProjectItem {
  projectMockup: string
  projectName: string
  projectDescription: string
  projectTheme: string
  isLive: boolean
  projectSourceLink: string
  projectLiveLink?: string
  technologies: Technology[]
}

export default ProjectItem
