import Footer from "@/components/Footer";
import Cards from "@/components/PortfolioCards";
import Data from "@/components/PortfolioData";
import WorkInProgress from "@/components/WorkInProgressAlert";

export default function Portfolio() {
    return (
        <>

            <h1 className='pageHeader'>Portfolio</h1>

            <div>
                <WorkInProgress />
            </div>


            <div className="card-container">
                <div className="row">

                    {Data.map((project, index) => (
                        <Cards
                            key={project.name + index}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            gitHubRepo={project.gitHubRepo}
                            deployment={project.deployment}

                        />
                    ))}

                </div>
            </div>

            <Footer />

        </>
    )
}
