import React, {Component} from 'react';
import {Card, Container} from "react-bootstrap";

class OptAlgoOptionsComponent extends Component {
    updateTextInput(val) {
        document.getElementById('textInput').value=val;
    }

    render() {
        return (
            <Container>
                <Card className={"align-items-left flex border-0 m-3 "}>
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