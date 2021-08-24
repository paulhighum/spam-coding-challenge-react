import Button from './Button'

const Report = ({ report, setReports }) => {

    const blockReport = async (e) => {
        console.log(e.target.parentElement.id)
        const res = await fetch(`http://localhost:3000/reports/${e.target.parentElement.id}/block`, {
            method: 'PUT',
            headers:{'Content-Type':'application/json'}
        })
        const data = await res.json()
        console.log(data)
        setReports(data)
    }

    const resolveReport = () => {
        console.log('clicked')
    }

    return (
        <div id={report.id}>
            <p>ID: {report.id}</p>
            <p>Type: {report.payload.reportType}</p>
            <p>State: {report.ticketState}</p>
            <p>Message: {report.payload.message}</p>
            <Button 
                text={report.viewState === 'BLOCKED' ? 'Already Blocked' : 'Block'}
                cursor={report.viewState === 'BLOCKED' ? 'not-allowed' : 'pointer'}
                disabled={report.viewState === 'BLOCKED' ? true : false}
                onClick={blockReport}
            />
            <Button text='Resolve' onClick={resolveReport}/>
        </div>
    )
}

export default Report
