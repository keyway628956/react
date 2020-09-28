import React, { useState, useEffect } from 'react';
//import Layout from "../layout/Layout";

import { useQuery, useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import { InputGroup, Container, Row, Col, FormControl, ListGroup, Spinner, Button, Modal } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';



const QUERY_CUSTOMER = gql`
  query {
    customerList{
     id
     name
     tel
     phone
     date
     other
   }
}
`;

const CREATE_CUSTOMER = gql`
  mutation CreateCustomer($id:ID!,$name:String!,$tel:String!,$phone:String!,$date:Date!,$other:String!){
   createCustomer (id:$id,name:$name,tel:$tel,phone:$phone,date:$date,other:$other){
        customer{
        id
        name      
        tel
        phone
        date
        other  
        }
    }
}
`;

function MydModalWithGrid(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            size="lg"
            style={{ backgroundColor: 'transparent', maxHeight: "100%" }}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
          </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            .col-xs-12 .col-md-8
              </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
              </Col>
                    </Row>

                    <Row>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
              </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
              </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
              </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}





function Customer() {
    //const [count, setCount] = useState(0);
    const [isQuery, setIsQuery] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [item, setItem] = useState({
        id: '', name: "", tel: "", phone: "", date: "", other: ""
    })
    //QUERY
    const { data, loading, refetch } = useQuery(
        QUERY_CUSTOMER, {
        //pollInterval: 1000 // refetch the result every 0.5 second
    }
    );

    //ADD
    //let inputName;
    //let inputRef = useRef(null);
    const [createcustomer] = useMutation(CREATE_CUSTOMER);

    const columns = [
        {
            dataField: "id", text: "編號", sort: true,
            // Perform a reverse sorting here
            sortFunc: (a, b, order, dataField, rowA, rowB) => {
                if (order === 'asc') {
                    return b - a;
                }
                return a - b; // desc
            },
            align: 'center', headerAlign: "center",
            headerStyle: { width: '5em' },
            style: { wordBreak: "break-all", wordWrap: "break-word", whiteSpace: "normal" }
        },
        {
            dataField: "name", text: "姓名", sort: true, filter: textFilter(), headerAlign: "center",
            headerStyle: { width: '10em' },
            style: { wordBreak: "break-all", wordWrap: "break-word", whiteSpace: "normal" }
        },
        {
            dataField: "tel", text: "電話", sort: true, filter: textFilter(), headerAlign: "center",
            headerStyle: { width: '10em' },
            style: { wordBreak: "break-all", wordWrap: "break-word", whiteSpace: "normal" }
        },
        {
            dataField: "phone", text: "手機號碼", sort: true, filter: textFilter(), headerAlign: "center",
            headerStyle: { width: '10em' },
            style: { wordBreak: "break-all", wordWrap: "break-word", whiteSpace: "normal" }
        },
        {
            dataField: "date", text: "加入日期", sort: true, filter: dateFilter(), headerAlign: "center",
            headerStyle: { width: '18em' },
            style: { wordBreak: "break-all", wordWrap: "break-word", whiteSpace: "normal" }
        },
        {
            dataField: "other", text: "備註", sort: true, filter: textFilter(), headerAlign: "center",
            headerStyle: { width: '20em' },
            style: { wordBreak: "break-all", wordWrap: "break-word", whiteSpace: "normal" }
        },

    ]
    const defaultSorted = [{
        dataField: 'id',
        order: 'descx'
    }];


    // 相似於 componentDidMount 和 componentDidUpdate:
    useEffect(() => {


    });

    function onChange(evt) {
        setItem(
            {
                id: evt.target.name === "id" ? evt.target.value : item.id,
                name: evt.target.name === "name" ? evt.target.value : item.name,
                tel: evt.target.name === "tel" ? evt.target.value : item.tel,
                phone: evt.target.name === "phone" ? evt.target.value : item.phone,
                date: evt.target.name === "date" ? evt.target.value : item.date,
                other: evt.target.name === "other" ? evt.target.value : item.other,

            }
        );
        console.log("item", item, 'isEdit', isEdit);

        console.log("new value", evt.target.value, "event", evt.target.name);

    }

    // should handle loading status
    if (loading) return <div style={{ align: "center" }}>
        <Button variant="primary" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"

            />
        Loading...
    </Button>
    </div>;

    return (


        <div>
            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
            <Container >
                <Row >
                    <Col xs="12" md="2" >
                        <h2>ListGroup</h2>
                        <ListGroup>
                            <ListGroup.Item action
                                onClick={e => {
                                    e.preventDefault();
                                    setIsQuery(true);
                                    setIsAdd(false);
                                    setIsEdit(false);
                                    refetch();

                                }}
                            >檢視</ListGroup.Item>
                            <ListGroup.Item action
                                onClick={e => {
                                    e.preventDefault();
                                    setIsQuery(false);
                                    setIsAdd(true);
                                    setIsEdit(false);
                                    setModalShow(true);
                                }}> 新增</ListGroup.Item>
                            <ListGroup.Item action
                                onClick={e => {
                                    e.preventDefault();
                                    setIsQuery(false);
                                    setIsAdd(false);
                                    setIsEdit(true);

                                }}> 修改</ListGroup.Item>

                        </ListGroup>
                    </Col>

                    <Col xs="12" md="10" style={isQuery ? {} : { display: 'none' }}>
                        <h2>顧客清單</h2>
                        <div className="table-responsive" style={{ wordBreak: "break-all", wordWrap: "break-word", whiteSpace: "normal" }}>
                            <BootstrapTable

                                keyField="id"
                                data={data.customerList}
                                columns={columns}
                                bodyStyle={{ overflow: 'overlay' }}
                                pagination={paginationFactory()}
                                defaultSorted={defaultSorted}
                                filter={filterFactory()}
                                filterPosition="top"

                            //cellEdit={cellEditFactory({ mode: 'click', blurToSave: true })}
                            >

                            </BootstrapTable>
                        </div>


                        {/*    <table>
                            <thead>
                                <tr>
                                    <th>編號</th>
                                    <th>姓名</th>
                                    <th>住家電話</th>
                                    <th>手機號碼</th>
                                    <th>加入日期</th>
                                    <th>其他</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.customerList.map((item) => (


                                    <tr  >
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.tel}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.date}</td>
                                        <td>{item.other}</td>

                                    </tr>
                                ))
                                }


                            </tbody>
                        </table> */}


                    </Col>

                    <Col xs="12" md="10" style={isAdd ? {} : { display: 'none' }} >
                        <h2>新增資料</h2>

                        <InputGroup className="mb-3" >
                            <InputGroup.Prepend>
                                <InputGroup.Text>id</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="id" value={data.customerList.length + 1} readOnly />

                        </InputGroup>

                        <InputGroup className="mb-3" >
                            <InputGroup.Prepend>
                                <InputGroup.Text>姓名</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="name" onChange={onChange} />

                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text >電話</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="tel" onChange={onChange} />

                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text >手機</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="phone" onChange={onChange} />

                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text >加入日期</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="date" onChange={onChange} />

                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text >備註</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="other" onChange={onChange} />

                        </InputGroup>

                        <button onClick={e => {
                            e.preventDefault();
                            createcustomer({

                                variables: {
                                    id: data.customerList.length + 1,
                                    name: item.name,
                                    tel: item.tel,
                                    phone: item.phone,
                                    date: item.date,
                                    other: item.other,
                                },
                            });
                            // inputRef.value = '';
                        }}> 送出</button>

                    </Col>
                </Row>
            </Container>



        </div>


    );
}

export default Customer; //輸出App函式