import { Link } from "react-router-dom"

const Header =() =>{
     return(
          <header>
            <Link className="header-link" to="/">
        <div className="logo">
          Video  library
        </div>
        </Link>
          </header>
     )
}


export default  Header








