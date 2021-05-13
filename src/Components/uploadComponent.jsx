import React, {Component} from 'react';
import {Card, Form, ProgressBar} from "react-bootstrap";
import {Link, Route} from "react-router-dom";

class UploadComponent extends Component {
    render() {
        return (
            <div className={"flex"}>
                <Card className={"justify-content-center align-items-center flex border-0"}>
                    <Card.Body className={"col-md-8 "}>
                        <Form.Group className="input-group mb-3 mt-5 was-validated">
                            <input type="file" className="form-control"
                                   aria-label="Text input with segmented dropdown button" id={"validCustomFile"} required/>
                           <Link to={"optimization"}  style={{textDecoration: 'none'}}>
                                <div className="input-group-append">
                                    <button type="button" className="btn btn-outline-secondary" >Karşılaştır</button>
                                </div>
                            </Link>
                            <div className={"invalid-feedback"}>Lütfen Dosyayı ekleyiniz.</div>
                        </Form.Group>
                        <ProgressBar variant="success" animated now={45} />
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default UploadComponent;
