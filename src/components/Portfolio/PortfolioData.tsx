import { Images } from '@/assets/images/images';
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
        name: 'Asphalt Legends v1',
        description: 'Non-React version of Asphalt Legends Unite video game site',
        gitHubRepo: 'https://github.com/JHebenstreit48/asphalt-legends-unite',
        deployment: 'https://jhebenstreit48.github.io/asphalt-legends-unite/',
    },
    {
        image: Images.CodingNotesV2,
        name: 'CodeQuest',
        description: 'React version of Coding Notes website',
        gitHubRepo: 'https://github.com/JHebenstreit48/CodeQuest',
        deployment: 'https://web-dev-codequest.netlify.app/',
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
        image: 'https://www.makeareadme.com/images/open-graph-logo.png?v=20181203',
        name: 'ReadMe Generator',
        description: 'CLI based web app that generates a ReadMe file',
        gitHubRepo: 'https://github.com/JHebenstreit48/fun-readme-generator',
        deployment: 'https://drive.google.com/file/d/1jk-KmZ8Rp15vUH6QkIQsLW2LZMe_VQKn/view?usp=sharing',
    },
    {
        image: Images.AsphaltReact,
        name: 'Asphalt Legends v2',
        description: 'React version of Asphalt Legends Unite video game site',
        gitHubRepo: 'https://github.com/JHebenstreit48/asphalt-legends-unite-react',
        deployment: 'https://asphalt-legends-unite-react.onrender.com',
    },
];

export default portfolioData
