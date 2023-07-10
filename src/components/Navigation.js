import { Link, Outlet } from "react-router-dom"


function Navigation () {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid bg-primary">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <div className="img"></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse link" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active font text-light" aria-current="page" href="#"><Link to="home" className="text-light">Home</Link></a>
                        <a className="nav-link text-light"><Link to="tasks" className="text-light">Tasks</Link></a>
                        <a className="nav-link text-light"><Link to="messages" className="text-light">Messages</Link></a>
                        <a className="nav-link text-light"><Link to="layout" className="text-light">Layout</Link></a>
                    </div>
                </div>
            </div>
            </nav>
            <div className="div-outlet">
                <Outlet/>
            </div>
            
        </>
        
    )
}

export default Navigation