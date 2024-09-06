import {Images } from '../assets/images/images.ts'
export interface IPortfolioCard {
    image: string;
    name: string;
    description: string;
    gitHubRepo: string;
    deployment?: string;
}

const portfolioData: IPortfolioCard[] = [
    {
        image: Images.Asphalt,
        name: 'Asphalt Legends Unite v1',
        description: 'Non-React version of Asphalt Legends Unite video game site',
        gitHubRepo: 'https://github.com/JHebenstreit48/asphalt-legends-unite',
        deployment: 'https://jhebenstreit48.github.io/asphalt-legends-unite/',
    },
    {
        image: Images.CodingNotesV2,
        name: 'Coding Notes v2',
        description: 'React version of Coding Notes website',
        gitHubRepo: 'https://github.com/JHebenstreit48/portfolio-react',
        deployment: '',
    },
    {
        image: Images.StarWars,
        name: 'Star Wars v1',
        description: 'Non-React version of Star Wars website',
        gitHubRepo: 'https://github.com/JHebenstreit48/star-wars',
        deployment: 'https://jhebenstreit48.github.io/star-wars/',
    },
    {
        image: Images.CodingNotesV1,
        name: 'Portfolio v1',
        description: 'Non-React version of my portfolio',
        gitHubRepo: 'https://github.com/JHebenstreit48/portfolio',
        deployment: 'https://jhebenstreit48.github.io/coding-study-guide/',
    },
    {
        image: '',
        name: '',
        description: '',
        gitHubRepo: '',
        deployment: '',
    },
    {
        image: '',
        name: '',
        description: '',
        gitHubRepo: '',
        deployment: '',
    },
]; 

export default portfolioData
