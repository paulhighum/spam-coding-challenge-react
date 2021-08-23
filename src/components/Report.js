

const Report = ({ report }) => {
    return (
        <div>
            <p>ID: {report.id}</p>
            <p>Type: {report.payload.reportType}</p>
            <p>State: {report.ticketState}</p>
            <p>Message: {report.payload.message}</p>
            <button>Block</button>
            <button>Resolve</button>
        </div>
    )
}

export default Report
