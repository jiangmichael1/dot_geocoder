import React from "react";
import * as XLSX from "xlsx";


export const ParseExcel = () => {

    const handleFile = async (e) => {
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data)
        
        console.log(workbook);
    }

    return (
        <div>  
            <h1 class="parseHeader">Parse Excel</h1>
            <input type="file" onChange={(e) => handleFile(e)} />
        </div>
    )
}
