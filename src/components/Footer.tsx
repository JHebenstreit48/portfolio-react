// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { all } from '@awesome/kit-KIT_CODE/icons'

import '../css/Footer.css'

// library.add(...all)

// const element = <FontAwesomeIcon icon="{['kit', 'my-icon']}" />
// This will cause this Typescript error: `Type is not assignable to type IconProp`

// ReactDOM.render(element, document.body)

export default function Footer() {
    return (

        <>

        <footer className="footer">

            <p>Created by Justin Hebenstreit</p>
            <div>
            {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
            <a href=""></a>
            </div>
               
        </footer>

    </>

    );

};
