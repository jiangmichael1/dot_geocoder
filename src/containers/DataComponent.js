import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DataComponent = () => {
    const data = useSelector((state) => state.allData.data);

    /*
    const render_3List = Object.entries(data).map((datum, index) => {
        const [label, value] = datum
        return(
            <div className='search_3' key={index}>
                <p>{label}: {value} </p>
            </div>
        )
    })
    */

    console.log(data)

    const render_1B = Object.entries(data).map((datum, index) => {
        const [label] = datum;

        return( 
                <div key={index}>
                    <div>
                        <div className='search_1'>
                            <p><b>{label}:</b></p>
                        </div>
                    </div>              
                </div>               
         );
    }) 

    return(
        <div>{render_1B}</div>       
   )
    
};

export default DataComponent;