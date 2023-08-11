import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

import { useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import {removeFormData, selectValForm} from '../features/valFormSlice';
import { useSelector } from 'react-redux';


//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function GraphChart() {

    const user = useSelector(selectUser);
    const valForm = useSelector(selectValForm);

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault(); //prevent website from refresh and reloading 
        dispatch(logout());
        dispatch(removeFormData());
    }

    // refrence from https://canvasjs.com/react-charts/chart-index-data-label/
    const options = {
        animationEnabled: true,
        exportEnabled: false,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Student's progress graph"
        },
        axisX: {
          includeZero: true
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { x: 1, y: Number(valForm.sem1)},
                { x: 2, y: Number(valForm.sem2) },
                { x: 3, y: Number(valForm.sem3) },
                { x: 4, y: Number(valForm.sem4) },
                { x: 5, y: Number(valForm.sem5) },
                { x: 6, y: Number(valForm.sem6) },
                { x: 7, y: Number(valForm.sem7) },
                { x: 8, y: Number(valForm.sem8) }
                // { x: 80, y: 92, indexLabel: "Highest" },
            ]
        }]
    }

  return (
    <div>
        <CanvasJSChart options = {options} 
                /* onRef={ref => this.chart = ref} */
                /* containerProps={{ width: '100%', height: '300px' }} */
            />

        <button type='submit' className='submit__btn' onClick={(e) => handleLogout(e)}>Logout</button>
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  )
}

export default GraphChart
