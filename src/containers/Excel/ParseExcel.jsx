import React, { useState } from "react";
import * as XLSX from "xlsx";
import 'handsontable/dist/handsontable.full.min.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react'

registerAllModules();

//Imports an Excel sheet and displays it in the console
export const ParseExcel = () => {
    const [fileName, setFileName] = useState(null)
    const handleFile = async (e) => {
        const file = e.target.files[0];
        setFileName(file.name);
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data)
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        // Makes the first array contain all headers and the rest of the arrays have the values
        const jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1,
            defval: "",
        } )

        console.log(jsonData);
    }

    return (
        <div>  
            <h1 className="parseHeader">Parse Excel</h1>
            {fileName && (
                <p>FileName: <span>{fileName}</span></p>
            )}
            <input type="file" onChange={(e) => handleFile(e)} />
            
        </div>
    )
}

console.log(ParseExcel)
