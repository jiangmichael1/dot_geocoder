import ParseExcel from './ParseExcel'

const tableheaders = jsonData[0].map((value) => {
    return(
        <div>
            <HotTable 
            data={[
                [<b>{value}</b>],
                ['2023', "Test 1", "Test 2"],
                ['2022', "Test 3", "Test 4"]
            ]}
            rowHeaders = {false}
            colHeaders = {false}
            height="auto"
            licenseKey="non-commercial-and-evaluation" />
        </div>
    )
})