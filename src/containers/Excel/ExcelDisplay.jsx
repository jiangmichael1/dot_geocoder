import 'handsontable/dist/handsontable.full.min.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';

registerAllModules();

const ExcelDisplay = (props) => {
    const header = props.headers
    const data = props.data
    
    return (  
        <HotTable 
        data={data}
        
        rowHeaders = {false}
        colHeaders = {header}
        height="auto"
        licenseKey="non-commercial-and-evaluation" />
        
    )
    
}

export default ExcelDisplay;