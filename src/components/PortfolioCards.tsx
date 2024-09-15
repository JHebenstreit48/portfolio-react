import { IPortfolioCard } from "./PortfolioData";
import '../css/PortfolioCard.css'
export default function Cards(project: IPortfolioCard) {
    return (
        <>

            <div className='card text-bg-dark'>

                <img className="card-img" src={project.image} alt={project.description} />
                <div className="card-img-overlay">

                    <div className="card-title-container">
                        <h5 className="card-title">{project.name}</h5>
                    </div>

                    <div className="github">

                        <a target="_blank" className="fa-brands fa-github icon" href={project.gitHubRepo}></a>

                    </div>

                    <div className="deployment">

                        <a target="_blank" className="" href={project.deployment}><i className="fa-solid fa-globe icon"></i></a>

                    </div>

                </div>

            </div>

        </>
    );
}
