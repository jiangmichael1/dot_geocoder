import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/actions/dataActions';
import DataComponent from './DataComponent';
import RequestForm from './RequestForm';


/* TO DO
    Figure out OpenLayers map display
    Figure out values
    User input     
*/

/* 3/27/23
   Got a working GitHub repo
   Began working with OpenLayers Map Library
   Corrected all usage of Function 1A to 1B
   Successfully rendering each label -> Still need to figure out values
   Fixed an issue with DisplayFormat = False causing weird spacing on return request
*/

/*  Overall Guidelines/To Do List
    Figure out how to use redux store
    All constants need storage in store so that it can be changed.
    On form submit, the constants should be changed. 

    Read rows of cells from Excel and use that as input
*/

// Parameters needed for both functions
const proxy = "https://cors-anywhere.herokuapp.com/";
const baseURL = "https://geoservice.planning.nyc.gov/geoservice/geoservice.svc/"
const key = "r4u7xXABDHG7JaNd";

// Function 1B
const function_1B = "Function_1B";
const borough = "4"; //‘1’=Manhattan, ‘2’=Bronx, ‘3’=Brooklyn, ‘4’=Queens, ‘5’=Staten Island
const addressNum = "6140"; 
const streetName = "Saunders Street";

//Function 3
const function_3 = "Function_3"
const borough1 = "4"
const onStreet = "63rd Drive"
const borough2 = "4"
const secondCrossStreet = "Queens Blvd"
const borough3 = "4"
const firstCrossStreet = "Saunders"

const function_1B_url = baseURL + function_1B + "?Borough=" + borough + "&AddressNo=" + addressNum + "&StreetName=" + streetName + "&Key=" + key
const function_3_url = baseURL + function_3 + "?Borough1=" + borough1 + "&OnStreet=" + onStreet + "&SecondCrossStreet=" + secondCrossStreet + "&Borough2=" + borough2 + "&FirstCrossStreet=" + firstCrossStreet + "&Borough3=" + borough3 + "&key=" + key

const DataListing = () => {
const data = useSelector((state) => state);
const dispatch = useDispatch();

const fetchData = async () => {
    const response = await axios
        .get(proxy + function_1B_url)
        .catch((err) => {
            console.log("Err", err)
        });

    // Sends response to Redux store labeled as data
    dispatch(setData(response.data.display));
    };
    
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="ui grid container">        
            <RequestForm />
            <DataComponent />
        </div>
    );
};

export default DataListing;