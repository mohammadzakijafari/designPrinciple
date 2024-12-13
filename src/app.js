import Accordion from './components/Accordion';
import './index.css';

function App () {
    const items = [
        {
            id: "1",
            label: "Can I use React on a Project?",
            content: "It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want.",
        },
        {
            id: "2",
            label: "Can I use JavaScript on a Project?",
            content: "It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want.",
        },
        {
            id: "3",
            label: "Can I use Next.js on a Project?",
            content: "It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want. It is possible to use React on any project you want.",
        },
    ]
    return (
        <div className="">
            <Accordion items = { items } />
        </div>
    )
}

export default App;