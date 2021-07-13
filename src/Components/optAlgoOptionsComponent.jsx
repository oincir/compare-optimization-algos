import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

const response = `[{"id":0,"name":"Population Size","type":"slider","lowerBound":10,"upperBound":1000,"defaultValue":100,"isContinuous":false,"filterExpression":"const result = x >= 10 && x <= 1000","e\
xceptionMessage":"Population Size configuration value is invalid.","filterFunction":"(_=>{try{const x=%VALUE%;const result = x >= 10 && x <= 1000;return result;}catch(ex){throw Error(\
'Population Size configuration value is invalid.');return false;}})();"},{"id":1,"name":"J","type":"slider","lowerBound":500,"upperBound":20000,"defaultValue":1000,"isContinuous":fals\
e,"filterExpression":"const result = x >= 500 && x <= 20000","exceptionMessage":"J configuration value is invalid.","filterFunction":"(_=>{try{const x=%VALUE%;const result = x >= 500\
&& x <= 20000;return result;}catch(ex){throw Error('J configuration value is invalid.');return false;}})();"},{"id":2,"name":"M","type":"slider","lowerBound":0.2,"upperBound":5,"defau\
ltValue":2,"isContinuous":true,"filterExpression":"const result = x >= 0.2 && x <= 5","exceptionMessage":"M configuration value is invalid.","filterFunction":"(_=>{try{const x=%VALUE%\
;const result = x >= 0.2 && x <= 5;return result;}catch(ex){throw Error('M configuration value is invalid.');return false;}})();"}]`;

const parsed = JSON.parse(response);

class OptAlgoOptionsComponent extends Component {
    constructor (props) {
        super (props);
        this.state = {
            options : parsed,
        }
    }

    render() {
        function createOptions(){
            let options = []
            parsed.forEach(config => {

                if (config.type === "slider"){
                    options.push(
                            <div className={"mt-4 "}>
                                <label htmlFor="customRanges" className="form-label">{config.name} configuration {" ("+config.lowerBound+" - "+config.upperBound+")"}</label>
                                <input type="range" className="form-range" min={config.lowerBound} max={config.upperBound} defaultValue={config.defaultValue} step={(config.isContinuous) ? 0.1 : 1} id="customRanges"  onChange={event => document.getElementById("rangeval"+config.id).innerText = event.target.value}  />
                                <label id={"rangeval"+config.id}>{config.defaultValue}</label>
                            </div>
                    )
                }
                else
                    options.push(<div>Error</div>)
            });
            return options
        }


        return (
            <Container >
                <Card className={"align-items-center flex border-0 m-4"}>
                    <Card.Body className={"col-md-7 Options"}>
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                <option selected value={"0"}>Yapay Arı Kolonisi Algoritması</option>
                                <option value="1">Whale Optimization Algorithm</option>
                                <option value="2">Grey Wolf Optimization Algorithm</option>
                                <option value="3">Genetik Algoritma</option>
                            </select>
                            <label htmlFor="floatingSelect">Optimizasyon Algoritmaları</label>
                        </div>

                        <div className="form-check form-switch mt-4">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label text-muted" htmlFor="flexSwitchCheckDefault">Parametre On/Off</label>
                        </div>

                        {/*Dynamic option display*/}
                            {createOptions()}

                        <div className={"mt-4"}>
                            <label htmlFor="customRange3" className="form-label">int range</label>
                                <input type="range" className="form-range" min="0" max="10" step="1" id="customRange3" onChange={event => document.getElementById("rangevalint").innerText = event.target.value} />
                            <label id="rangevalint">0</label>
                        </div>

                        <div className={"mt-4"}>
                            <label htmlFor="customRange2" className="form-label">float range</label>
                            <input type="range" className="form-range" min="0" max="100" id="customRange2" step="0.1" onChange={event => document.getElementById("rangevalfloat").innerText = event.target.value} />
                            <label id="rangevalfloat">0</label>
                        </div>

                        <div className="row g-2 mt-4">
                            <div className="col-md">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingInputGrid"
                                           placeholder="Parametre1" />
                                        <label htmlFor="floatingInputGrid">Parametre 1</label>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="form-floating">
                                    <select className="form-select" id="floatingSelectGrid"
                                            aria-label="Floating label select example">
                                        <option value="1">1</option>
                                        <option value="2">3</option>
                                        <option value="3">5</option>
                                        <option value="4">7</option>
                                    </select>
                                    <label htmlFor="floatingSelectGrid">Parametre 2</label>
                                </div>
                            </div>
                        </div>

                    </Card.Body>
                </Card>
            </Container>

        );
    }
}

export default OptAlgoOptionsComponent;