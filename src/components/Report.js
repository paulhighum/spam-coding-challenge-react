import Button from './Button'

const Report = ({ report, blockReport, resolveReport }) => {

    return (
        <div id={report.id} className='report'>
            <p>ID: {report.id}</p>
            <p>Type: {report.payload.reportType}</p>
            <p>State: {report.ticketState}</p>
            <p>Message: {report.payload.message}</p>
            <Button 
                text={report.viewState === 'BLOCKED' ? 'Already Blocked' : 'Block'}
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
