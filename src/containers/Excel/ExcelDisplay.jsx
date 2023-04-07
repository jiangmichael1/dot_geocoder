import 'handsontable/dist/handsontable.full.min.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';

registerAllModules();

const ExcelDisplay = (props) => {
    const headers = props.headers
    console.log(headers)
    
    return (
        <div>
            <HotTable 
            data={[
                [{headers}],
                ['2023', "Test 1", "Test 2"],
                ['2022', "Test 3", "Test 4"]
            ]}
            rowHeaders = {false}
            colHeaders = {false}
            height="auto"
            licenseKey="non-commercial-and-evaluation" />
        </div>
    )
    

    
}

export default ExcelDisplay;