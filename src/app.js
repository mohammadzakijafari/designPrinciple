import Link from './components/Link';
import Route from './components/Route';
import './index.css';
import AccordionPage from './pages/AccordionPage';
import DropDownPage from './pages/DropDownPage';

function App () {
   
    return (
        <div className="">
            <Link to = "/accordion"> Accordion </Link>
            <Link to = "/dropdown"> Drop Down </Link>

            <div className=''>
                <Route path = "/accordion">
                    <AccordionPage />
                </Route>
                <Route path = "/dropdown">
                    <DropDownPage />
                </Route>
            </div>
        </div>
    )
}

export default App;