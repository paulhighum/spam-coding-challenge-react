import Report from './Report'

const Reports = ({ reports }) => {
    console.log(reports)
    return (
        <>
            {reports.map((report) => (
                <Report 
                    key={report.id}
                    report={report}
                />
            ))}
        </>
    )
}

export default Reports
