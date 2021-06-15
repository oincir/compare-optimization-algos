import React, {Component} from 'react';
import {Card, Container} from "react-bootstrap";



const response = `[{"id":0,"name":"Population Size","type":"slider","lowerBound":10,"upperBound":1000,"defaultValue":100,"isContinuous":false,"filterExpression":"const result = x >= 10 && x <= 1000","e\
xceptionMessage":"Population Size configuration value is invalid.","filterFunction":"(_=>{try{const x=%VALUE%;const result = x >= 10 && x <= 1000;return result;}catch(ex){throw Error(\
'Population Size configuration value is invalid.');return false;}})();"},{"id":1,"name":"J","type":"slider","lowerBound":500,"upperBound":20000,"defaultValue":1000,"isContinuous":fals\
e,"filterExpression":"const result = x >= 500 && x <= 20000","exceptionMessage":"J configuration value is invalid.","filterFunction":"(_=>{try{const x=%VALUE%;const result = x >= 500\
&& x <= 20000;return result;}catch(ex){throw Error('J configuration value is invalid.');return false;}})();"},{"id":2,"name":"M","type":"slider","lowerBound":0.2,"upperBound":5,"defau\
ltValue":2,"isContinuous":true,"filterExpression":"const result = x >= 0.2 && x <= 5","exceptionMessage":"M configuration value is invalid.","filterFunction":"(_=>{try{const x=%VALUE%\
;const result = x >= 0.2 && x <= 5;return result;}catch(ex){throw Error('M configuration value is invalid.');return false;}})();"}]`;

const parsed = JSON.parse(response);


// <div className={"mt-4"}>
//     <label htmlFor="customRange3" className="form-label">new param range</label>
//     <input type="range" className="form-range" min={config.lowerBound} max={config.upperBound} step="1" id="customRange3" />
// </div>


class OptAlgoOptionsComponent extends Component {

    render() {
        function createOptions(){
            let a = []
            parsed.forEach(config => {

                if (config.type === "slider"){
                    a += <div>Success</div>
                }
                else
                    console.log("nope")
            });
            return a
        }

        return (
            <Container>
                <Card className={"align-items-center flex border-0 m-3 "}>
                    <Card.Body className={"col-md-4"}>
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

                        {
                            createOptions()
                        }

                        <div className={"mt-4"}>
                            <label htmlFor="customRange3" className="form-label">int range</label>
                            <input type="range" className="form-range" min="0" max="10" step="1" id="customRange3" />
                        </div>

                        <div className={"mt-4"}>
                            <label htmlFor="customRange2" className="form-label">float range</label>
                            <input type="range" className="form-range" min="0" max="100" id="customRange2" />
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


                        <div>
                            <fieldset className="row mb-3 mt-4">
                                <legend className="col-form-label col-sm-4 pt-0">Parametreler</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios"
                                               id="gridRadios1" value="option1" checked />
                                            <label className="form-check-label" htmlFor="gridRadios1">
                                                Default
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios"
                                               id="gridRadios2" value="option2" />
                                            <label className="form-check-label" htmlFor="gridRadios2">
                                                value 1
                                            </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios"
                                               id="gridRadios3" value="option3" />
                                            <label className="form-check-label" htmlFor="gridRadios3">
                                                value 2
                                            </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </Card.Body>
                </Card>
            </Container>

        );
    }
}

export default OptAlgoOptionsComponent;