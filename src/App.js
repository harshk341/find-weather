import './App.css';
import { HashRouter } from 'react-router-dom';
import { Header } from './components';

const App = () => {
    return (
        <HashRouter basename='/'>
            <div className='app'>
                <div className='app-wrapper'>
                    <Header />
                </div>
            </div>
        </HashRouter>
    );
}
 
export default App;
