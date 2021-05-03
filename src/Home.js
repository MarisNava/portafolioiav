import imagen1 from './Untitled-1.jpg'
import imagen2 from './Untitled-2.jpg'
import imagen3 from './Untitled-3.jpg'
import imagen4 from './Untitled-4.jpg'
import imagen5 from './Untitled-5.jpg'
import imagen6 from './Untitled-6.png'
import lupa from './lupa.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (  
        <div className="home">
            <div className="container-fluid">
                        <div className="title">
                            <h1>Portafolio</h1>
                        </div>
                        <div className="input-group justify-content-center">

                        <img className="icon" src={lupa} width="45px" height="45px"/>                            
                            <input type="search" id="form1" className="form-search"/>
                        </div>
                       { /*<div className="projects">
                            <img src={imagen1} width="600px" height="414px"/>
                            <img src={imagen2} width="600px" height="414px"/>
                            <img src={imagen3} width="600px" height="414px"/>
                            <img src={imagen4} width="600px" height="414px"/>
                            <img src={imagen5} width="600px" height="414px"/>
                            <img src={imagen6} width="600px" height="414px"/>
                        </div>
                      */ }
            </div>
        </div>
    );
}
 
export default Home;