import Report from './Report'

const Reports = ({ reports, setReports, filterReports }) => {

    // Put req to block report, returns all reports, filters out resolved, and resets state
    const blockReport = async (reportId) => {
        try {
            const res = await fetch(`http://localhost:3000/reports/${reportId}/block`, {
                method: 'PUT',
                headers:{'Content-Type':'application/json'}
            })
            const data = await res.json()
            const dataToDisplay = filterReports(data)
            setReports(dataToDisplay)
        } catch(err){
            console.log(err)
        }
    }

    // Put req to resolve report, returns all reports, filters out resolved, and resets state
    const resolveReport = async (reportId) => {
        try {
            const res = await fetch(`http://localhost:3000/reports/${reportId}/resolve`, {
                method: 'PUT',
                headers:{'Content-Type':'application/json'}
            })
            const data = await res.json()
            const dataToDisplay = filterReports(data)
            setReports(dataToDisplay)
        } catch(err){
            console.log(err)
        }
    }

    return (
        <>
            {reports.map((report) => (
                <Report 
                    key={report.id}
                    report={report}
                    blockReport={blockReport}
                    resolveReport={resolveReport}
                />
            ))}
        </>
    )
}

export default Reports
