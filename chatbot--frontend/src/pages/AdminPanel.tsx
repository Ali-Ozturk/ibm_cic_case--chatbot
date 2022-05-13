import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const AdminPanel = () => {
    return (
        <Container className={'flex-grow-1'}>
            <Row className={'pt-4 h-100'}>
                <Col sm={7}>
                    <h4>Settings</h4>
                </Col>


                <Col sm={5} className={'rounded pb-5 h-100'}>
                    <div className={'bg-dark h-100 rounded'}>

                        <div className="position-relative">
                            <div className="chat-messages p-4">

                                <div className="chat-message-right pb-4">
                                    <div>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                             className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
                                        <div className="text-muted small text-nowrap mt-2">2:33 am</div>
                                    </div>
                                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                        <div className="font-weight-bold mb-1">You</div>
                                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                    </div>
                                </div>

                                <div className="chat-message-left pb-4">
                                    <div>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                             className="rounded-circle mr-1" alt="Sharon Lessman" width="40"
                                             height="40"/>
                                        <div className="text-muted small text-nowrap mt-2">2:34 am</div>
                                    </div>
                                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                        <div className="font-weight-bold mb-1">Sharon Lessman</div>
                                        Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                    </div>
                                </div>

                                <div className="chat-message-right mb-4">
                                    <div>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                             className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
                                        <div className="text-muted small text-nowrap mt-2">2:35 am</div>
                                    </div>
                                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                        <div className="font-weight-bold mb-1">You</div>
                                        Cum ea graeci tractatos.
                                    </div>
                                </div>

                                <div className="chat-message-left pb-4">
                                    <div>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                             className="rounded-circle mr-1" alt="Sharon Lessman" width="40"
                                             height="40"/>
                                        <div className="text-muted small text-nowrap mt-2">2:36 am</div>
                                    </div>
                                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                        <div className="font-weight-bold mb-1">Sharon Lessman</div>
                                        Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae
                                        commodo lectus mauris et velit.
                                        Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.
                                    </div>
                                </div>

                                <div className="chat-message-left pb-4">
                                    <div>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                             className="rounded-circle mr-1" alt="Sharon Lessman" width="40"
                                             height="40"/>
                                        <div className="text-muted small text-nowrap mt-2">2:37 am</div>
                                    </div>
                                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                        <div className="font-weight-bold mb-1">Sharon Lessman</div>
                                        Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci.
                                    </div>
                                </div>

                                <div className="chat-message-right mb-4">
                                    <div>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                             className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
                                        <div className="text-muted small text-nowrap mt-2">2:38 am</div>
                                    </div>
                                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                        <div className="font-weight-bold mb-1">You</div>
                                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default AdminPanel;
