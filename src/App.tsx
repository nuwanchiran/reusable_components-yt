import './App.scss';
import AppList from './components/atoms/AppList/AppList';

function App() {

  return (
    <div className="App">
      <AppList url={'<ADD URL HERE>'} contentPerPage={10} />
    </div>
  )
}

export default App
