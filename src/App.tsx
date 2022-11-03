import './App.scss';
import AppList from './components/atoms/AppList/AppList';

function App() {

  return (
    <div className="App">
      <AppList url={'https://jsonplaceholder.typicode.com/posts/'} contentPerPage={10} />
    </div>
  )
}

export default App
