import Image from '../assets/images/asphalt-legends-unite-non-react.png';
export default function Portfolio() {

    const portfolioItems: PortfolioItem[] = [];

    return (

        <>

            <h1 className='pageHeader'>Portfolio</h1>

            <div className="card text-bg-dark">
                <img src={Image} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Asphalt Legends Unite v1</h5>
                        <p className="card-text">Non-React version of Asphalt Legends Unite video game site</p>
                        <p className="card-text"><small></small></p>
                    </div>
            </div>
        </>

    );

};
