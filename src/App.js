import './App.css';
import { HashRouter } from 'react-router-dom';
import { Header, Widget } from './components';

const App = () => {
    return (
        <HashRouter basename='/'>
            <div className='app'>
                <div className='app-wrapper'>
                    <Header />
                    <Widget />
                </div>
            </div>
        </HashRouter>
    );
}
 
export default App;
