import React, {Component} from 'react';
import { Card, Form } from "react-bootstrap";

class UploadComponent extends Component {
    render() {
        return (
            <Card className={"flex justify-content-center align-items-center "}>
                <Card.Body>
                    <Form.Group className={"was-validated "}>
                        <div className={"custom-file "}>
                            <input type={"file"} className={"custom-file-input"} id={"validCustomFile"} required/>
                            <label className={"custom-file-label"}>Dosya Seç...</label>
                            <div className={"invalid-feedback"}> Lütfen Dosyayı ekleyiniz.</div>
                        </div>
                    </Form.Group>
                </Card.Body>
            </Card>
        );
    }
}

export default UploadComponent;