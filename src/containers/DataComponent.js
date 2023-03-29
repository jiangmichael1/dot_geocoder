import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DataComponent = () => {
    const data = useSelector((state) => state.allData.data);

    const dataArray = Object.entries(data)

    /* const render_3List = Object.entries(data).map((datum, index) => {
        
        const [label, value] = datum
        return(
            <div className='search_3' key={index}>
                <p>{label}: {value} </p>
            </div>
        )
        
    })
    */
    
    const render_1B = data.map((datum, index) => {
        const {
            street_name, 
            high_address_number, 
            low_address_number, 
            b7sc, 
            bin, 
            type_meaning,
            tpad_bin_status
        } = datum;

        return( 
                <div key={index}>
                    <div>
                        <div className='search_1'>
                            <p><b>Street Name: </b>{street_name}</p>
                            <p><b>High Address Number: </b>{high_address_number}</p>
                            <p><b>Low Address Number: </b>{low_address_number}</p>
                            <p><b>b7sc: </b>{b7sc}</p>
                            <p><b>bin: </b>{bin}</p>
                            <p><b>type_meaning: </b>{type_meaning}</p>
                            <p><b>tpad_bin_status: </b>{tpad_bin_status}</p>
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