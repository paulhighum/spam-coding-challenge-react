import Button from './Button'

const Report = ({ report, setReports, filterReports }) => {

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
        <div id={report.id} className='report'>
            <p>ID: {report.id}</p>
            <p>Type: {report.payload.reportType}</p>
            <p>State: {report.ticketState}</p>
            <p>Message: {report.payload.message}</p>
            <Button 
                text={report.viewState === 'BLOCKED' ? 'Already Blocked' : 'Block'}
                cursor={report.viewState === 'BLOCKED' ? 'not-allowed' : 'pointer'}
                disabled={report.viewState === 'BLOCKED' ? true : false}
                onClick={() => {
                    blockReport(report.id)
                }}
            />
            <Button text='Resolve' onClick={() => {
                resolveReport(report.id)
            }}/>
        </div>
    )
}

export default Report
