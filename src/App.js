import { useState, useEffect } from 'react';
import Header from './components/Header'
import Reports from './components/Reports';

const App = () => {
  const [reports, setReports] = useState([])
  
  useEffect(() => {
    const getReports = async () => {
      const reportsFromAPI = await fetchReports()
      setReports(reportsFromAPI)
    }
    getReports()
  }, [])

  // Fetch Spam Reports
  const fetchReports = async () => {
    const res = await fetch('http://localhost:3000/reports')
    const data = await res.json()
    return data
  }

  return (
    <div className='App'>
      <Header />
      <Reports reports={reports} setReports={setReports}/>
    </div>
  );
}
export default App;
