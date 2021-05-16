import React from 'react';
import {Col, Row, Button, Navbar, Nav,NavDropdown, Form, FormControl, FormLabel, Container} from "react-bootstrap";


function Body()
{
    


    return(<>
<Form method="post" encType="multipart/form-data" action="/">
<img 
    alt=""
    src="../../images/screen-full.svg"
    width="250"
    height="250"
    className=" m-auto d-block " 
/>{' '}
<Button type="button" className="btn btn-success btn-lg m-auto d-block">
    <Form.Label  className="large-label">
        upload prescription
    </Form.Label>
    <Form.File id="upload-photo"  className="d-none">
    </Form.File>
</Button>
</Form>
    </>);
}
export default Body;