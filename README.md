# Portfolio React Version
![Static Badge](https://img.shields.io/badge/License-MIT-yellow)

  ## Description
  
A React JS version of my portfolio.

  ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation

N/A

## Usage



## License
  This project is licensed under the [MIT](https://opensource.org/license/MIT) license.

## Contributions

Ruben Dominguez helped me understand React by showing me an example of a self-closing tag. I also had some assistance from GitHub CoPilot chat when I got stuck on something and could not figure it out with a Google search.
i.e.
<h1></h1> 
</Navigation>

Ruben also advised me to change my code from being 4 hard-coded li items to the following to make my code more DRY.

i.e.

const links = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Portfolio', url: '/portfolio' },
  { title: 'Resume', url: '/resume' },
]

  <ul>
    {
      links.map((link) => (
        <ListItem key={link.title} to={link.url} title={link.title} />
      ))
    }
  </ul>

  const ListItem = (props: {to: string; title: string;}) => {
  return (
    <li>
      <a href={props.to}>{props.title}</a>
    </li>
  )
}



Also, used the following resources:
[text](https://www.google.com/search?q=syntax+for+self-closing+HTML+tag+in+React+js&oq=syntax+for+self-closing+HTML+tag+in+React+js&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigAdIBCTEwOTM0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8),
[text](https://gcore.com/learning/customize-your-tsconfigjson-file-for-typescript/),
[text](<https://dev.to/itswillt/explaining-reacts-types-940#:~:text=FC%20(React.,were%20introduced%20and%20widely%20adopted.>),
[text](https://stackoverflow.com/questions/75944820/whats-the-correct-type-for-error-in-userouteerror-from-react-router-dom),
[text](https://www.geeksforgeeks.org/reactjs-keys/),


## Tests

Only used node index.js to create this README. I did test the code several times though using a combination of the "Open with Live Server" and "Open in Default Browser" VS Code extensions.
  
## Questions

For any further questions you can contact me at [j.hebenstreit.developer@gmail.com](mailto:j.hebenstreit.developer@gmail.com). You can find projects I have created or participated in at [https://github.com/JHebenstreit48](https://github.com/https://github.com/JHebenstreit48).