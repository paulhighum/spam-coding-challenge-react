import Report from './Report'

const Reports = ({ reports, setReports }) => {
    return (
        <>
            {reports.map((report) => (
                <Report 
                    key={report.id}
                    report={report}
                    setReports={setReports}
                />
            ))}
        </>
    )
}

export default Reports
