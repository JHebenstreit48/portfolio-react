import { IPortfolioCard } from "./PortfolioData";
import '../css/PortfolioCard.css'
export default function Cards(project: IPortfolioCard) {
    return (
        <>

            <div className='card text-bg-dark'>

                <img className="card-img" src={project.image} alt={project.description} />
                <div className='card-img-overlay'>
                
                <div className="card-title-container">
                    <h5 className="card-title">{project.name}</h5>
                </div>
                    

                    <div className="github">

                        <a target="_blank" href={project.gitHubRepo}>GitHub</a>

                    </div>

                    <div className="deployment">

                        <a target="_blank" href={project.deployment}>Deployment</a>

                    </div>
                        

                    

                </div>

            </div>

            {/* <div className="card text-bg-dark">
  <img src="..." className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div> */}

        </>
    );
}
