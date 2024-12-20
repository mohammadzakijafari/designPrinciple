import Counter from './components/Counter';
import Route from './components/Route';
import Sidebar from './components/Sidebar';
import './index.css';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropDownPage from './pages/DropDownPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';

function App () {
   
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">

            <Sidebar />
            <div className='col-span-5 '>
                <Route path = "/">
                    <DropDownPage />
                </Route>
                <Route path = "/accordion">
                    <AccordionPage />
                </Route>
                <Route path = "/buttons">
                    <ButtonPage />
                </Route>
                <Route path = "/modal">
                    <ModalPage />
                </Route>
                <Route path = "/table">
                    <TablePage />
                </Route>
                <Route path = "/counter">
                    <Counter />
                </Route>
            </div>
        </div>
    )
}

export default App;