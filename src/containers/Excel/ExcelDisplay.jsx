import 'handsontable/dist/handsontable.full.min.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';

registerAllModules();

const ExcelDisplay = (props) => {
    const header = props.headers
    
    
    
    return (  
        <HotTable 
        data={[
            [{header}],
            ['2023', "Test 1", "Test 2"],
            ['2022', "Test 3", "Test 4"]
        ]}
        rowHeaders = {false}
        colHeaders = {header}
        height="auto"
        licenseKey="non-commercial-and-evaluation" />
        
    )
    

    
}

export default ExcelDisplay;