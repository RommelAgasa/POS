import './App.css'
import Category from './components/category'
import Menu from './components/menu'

function App() {
  return (
    <div className="grid gap-3 p-3 overflow-hidden h-screen">
      <div>
        <Category />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}


export default App