import './App.css'
import Category from './components/category'
import Menu from './components/menu'
import Invoice from './components/invoice';

function App() {
  return (
    <div className="grid grid-cols-7 gap-3 p-3 overflow-hidden h-screen">
      <div className='col-span-5 gap-3'>
        <div>
          <Category />
        </div>
        <div>
          <Menu />
        </div>
      </div>
      <div className='col-span-2'>
        <Invoice />
      </div>
    </div>
  );
}


export default App