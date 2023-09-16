
import './App.css'
import Header from './component/Header/Header';
import Course from './component/course/course'
import Deshbord from './component/deshbord/deshbord'


function App() {
  

  return (
    <>
      <Header></Header>
      <img src="" alt="" />
      <div className='md:flex md:container md:mx-auto'>
        <Course></Course>
        <Deshbord></Deshbord>
      </div>
    </>
  )
}

export default App
