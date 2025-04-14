
import './App.css'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import RadarChart from './components/RadarChart/RadarChart'
import TinyBarChart from './components/TinyBarChart/TinyBarChart'

function App() {

  return (
    <>
      <Navbar className='md:w-full' />
      <PriceOptions />
      <div className='mt-5 mb-3'>
        <h2 className="text-3xl text-center mt-5 mb-3 italic">Overview</h2>
        <div className='mt-5 mb-3 grid gap-2 md:grid-cols-3'>
          <LineChart />
          <RadarChart />
          <TinyBarChart />
        </div>
      </div>
    </>
  )
}

export default App
