import { IPortfolioCard } from "./PortfolioData";
import '../css/PortfolioCard.css'
export default function Cards(project: IPortfolioCard) {
    return (
        <>

                <div className='card text-bg-dark'>
                    
                    <img className="card-img-overlay"src={project.image} alt={project.description} />
                    <h5 className="card-title">{project.name}</h5>
                    <a href={project.gitHubRepo}>GitHub</a>
                    <a href={project.deployment}>Deployment</a>
                    
                </div>

        </>
    );
}
