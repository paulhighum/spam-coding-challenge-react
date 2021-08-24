import { useState, useEffect } from 'react';
import Header from './components/Header'
import Reports from './components/Reports';

const App = () => {
  const [reports, setReports] = useState([])
  
  useEffect(() => {
    const getReports = async () => {
      const reportsFromAPI = await fetchReports()
      const reportsForDisplay = filterReports(reportsFromAPI)
      setReports(reportsForDisplay)
    }
    getReports()
  }, [])

  // Fetch Spam Reports
  const fetchReports = async () => {
    const res = await fetch('http://localhost:3000/reports')
    const data = await res.json()
    return data
  }

  // Filter Closed Spam Reports
  const filterReports = (reportsArr) => {
    return reportsArr.filter(report => report.ticketState === 'OPEN')
  }

  return (
    <div className='App'>
      <Header />
      <Reports 
        reports={reports} 
        setReports={setReports}
        filterReports={filterReports}
      />
    </div>
  );
}
export default App;
