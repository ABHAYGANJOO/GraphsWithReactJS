import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

// let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const idk = {
//     title: {
//         text: "Basic Column Chart in React"
//     },
//     data: [{
//         type: "column",
//         dataPoints: [
//             { "label": "javascript", "y": 2180011 }, { "label": "java", "y": 1757907 }, { "label": "python", "y": 1666373 }, { "label": "c#", "y": 1466997 }, { "label": "php", "y": 1394132 }, { "label": "android", "y": 1325783 }, { "label": "html", "y": 1056726 }, { "label": "jquery", "y": 1008255 }, { "label": "c++", "y": 715322 }, { "label": "css", "y": 707847 }, { "label": "ios", "y": 651652 }, { "label": "mysql", "y": 619533 }, { "label": "sql", "y": 581487 }, { "label": "r", "y": 391065 }, { "label": "node.js", "y": 375996 }, { "label": "asp.net", "y": 361918 }, { "label": "arrays", "y": 357509 }, { "label": "c", "y": 353196 }, { "label": "ruby-on-rails", "y": 324514 }, { "label": "json", "y": 313256 }, { "label": ".net", "y": 305968 }, { "label": "sql-server", "y": 300831 }, { "label": "objective-c", "y": 291405 }, { "label": "swift", "y": 290928 }, { "label": "reactjs", "y": 287200 }, { "label": "python-3.x", "y": 275214 }, { "label": "angularjs", "y": 262016 }, { "label": "django", "y": 260203 }, { "label": "angular", "y": 247040 }, { "label": "excel", "y": 241979 }
//         ]
//     }]
// }


function ThirdPartyAPI() {

    let myData = [];
    let [items, setItems] = useState([]);
    let [datapoints, setDataPoints] = useState([]);
    const [page_size, setpage_size] = useState(5);
    const [page, setpage] = useState(10);
    const [min, setmin] = useState(0);
    const [max, setmax] = useState(10000);

    useEffect(() => {
        async function stackoverflowAPI() {

            let response = await fetch(`https://api.stackexchange.com/2.2/tags?pagesize=${page_size}&order=desc&sort=popular&site=stackoverflow&page=${page}&min=${min}&max=${max}`);
            let data = await response.json();
            setItems({ items: data.items });
        }

        stackoverflowAPI();

    }, [page, page_size, min , max]);

    useEffect(() => {
        items.items?.forEach(({ count, name }) => {
            myData.push({ label: name, y: count })
        });
        setDataPoints(myData);
        // console.log(datapoints)
    }, [items])

    useEffect(() => {
        // setOptions({ options:  })

        console.log(datapoints)
    }, [datapoints]);

    const HandlePage = (e) => {
        setpage(e.target.value)
    }
    const HandlePageSize = (e) => {
        setpage_size(e.target.value)
    }

    const HandleMin = (e) => {
        setmin(e.target.value);
    }
    const HandleMax = (e) => {
        setmax(e.target.value);
    }

    return (
        <div>
            {<CanvasJSChart options={
                {
                    title: {
                        text: "Language vs Frequency"
                    },
                    data: [{
                        type: "column",
                        dataPoints: datapoints
                    }]
                }
            } />}
            <div className="ui form" style = {{marginTop : '50px'}}>
                <div className="inline fields">
                    <div className="five wide field">
                        <label>Page</label>
                        <input type="text" placeholder="Page" value={page} onChange={(e) => HandlePage(e)} />
                    </div>
                    <div className="five wide field">
                        <label>Page Size</label>
                        <input type="text" placeholder="Page Size" value={page_size} onChange={(e) => HandlePageSize(e)} />
                    </div>
                    <div className="five wide field">
                        <label>Minimum</label>
                        <input type="text" placeholder="Min" value={min} onChange={(e) => HandleMin(e)} />
                    </div>
                    <div className="five wide field">
                        <label>Maximum</label>
                        <input type="text" placeholder="Max" value={max} onChange={(e) => HandleMax(e)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdPartyAPI;
