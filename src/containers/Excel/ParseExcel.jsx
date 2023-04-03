import React, { useState } from "react";
import * as XLSX from "xlsx";


export const ParseExcel = () => {
    const [fileName, setFileName] = useState(null)
    const handleFile = async (e) => {
        setFileName(file.name);
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data)
        
        console.log(workbook);
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
