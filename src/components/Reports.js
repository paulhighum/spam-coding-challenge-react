import Report from './Report'

const Reports = ({ reports, setReports, filterReports }) => {
    return (
        <>
            {reports.map((report) => (
                <Report 
                    key={report.id}
                    report={report}
                    setReports={setReports}
                    filterReports={filterReports}
                />
            ))}
        </>
    )
}

export default Reports
