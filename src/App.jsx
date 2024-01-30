import Navbar from './Components/Navbar'
import ToDoRoutes from './Components/todoRoutes'
import Footer from './Components/Footer'



function App() {


  return (
    <div>
    <Navbar/>
    <div className="container">
          <ToDoRoutes/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
