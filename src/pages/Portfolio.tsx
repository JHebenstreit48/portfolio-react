import Cards from "../components/PortfolioCards";
import Data from "../components/PortfolioData";

export default function Portfolio() {
    return (
        <>
         
            <h1 className='pageHeader'>Portfolio</h1>
            {Data.map((project, index)=>(
                <Cards
                key={project.name + index}
                name={project.name}
                description={project.description}
                image={project.image}
                gitHubRepo={project.gitHubRepo}
                deployment={project.deployment}
                />
            ))}


        </>
    )
}

//     return (

//         <>

//             <h1 className='pageHeader'>Portfolio</h1>

//             <div className="card text-bg-dark">

//                 <img src={Image} className="card-img" alt="..."/>

//                     <div className="card-img-overlay">

//                         <h5 className="card-title">Asphalt Legends Unite v1</h5>
//                         <p className="card-text">Non-React version of Asphalt Legends Unite video game site</p>
//                         <p className="card-text"><small></small></p>

//                     </div>
//             </div>
//         </>
//     );

// };
