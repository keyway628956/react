import React, { useState, useEffect, useRef } from 'react';
//import Layout from "../layout/Layout";

import { useQuery, useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import 'antd/dist/antd.css'
import { Table } from 'antd';







//import useSocket from 'socket.io-client';


const QUERY_CATEGORY = gql`
  query {
    category {
      id
      name
    }
}
`;

const CREATE_CATEGORY = gql`
  mutation CreateCategory($name:String!){
   createCategory (input:{name:$name}){
        category{
        id
        name        
        }
    }
}
`;





function GraphQL() {
    const [count, setCount] = useState(0);

    //QUERY
    const { data, loading } = useQuery(
        QUERY_CATEGORY, {
        pollInterval: 1000 // refetch the result every 0.5 second
    }
    );

    //ADD
    let inputName;
    let inputRef = useRef(null);
    const [createCategory] = useMutation(CREATE_CATEGORY);

    const [createCategory2] = useMutation(CREATE_CATEGORY);



    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
                {
                    text: 'Submenu',
                    value: 'Submenu',
                    children: [
                        {
                            text: 'Green',
                            value: 'Green',
                        },
                        {
                            text: 'Black',
                            value: 'Black',
                        },
                    ],
                },
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },


    ];

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    // useSocket(URL) -> URL：socket server 位址
    //const [socket] = useSocket('<https://open-chat-naostsaecf.now.sh>');


    // 相似於 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用瀏覽器 API 更新文件標題
        document.title = `You clicked ${count} times`;
        //socket.connect();
    });


    // should handle loading status
    if (loading) return <p>Loading...</p>;

    return (


        <div>
            <Container >
                <Row />
                <Row>

                    <Col xs="12" md="4">
                        新增資料
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                createCategory({
                                    variables: {
                                        name: inputName.value
                                    }
                                });
                                inputName.value = '';
                                // window.location.reload();
                            }}
                            style={{ marginTop: '2em', marginBottom: '2em', whiteSpace: 'nowrap' }}
                        >
                            <label>Category: </label>
                            <input
                                ref={node => {
                                    inputName = node;
                                }}
                                style={{ width: '200px' }}
                            />

                            <button type="submit" style={{ cursor: 'pointer' }}>Add a Category</button>
                            <br />
                            <label>Category2: </label>
                            <input ref={ref => { inputRef = ref }} style={{ width: '200px' }} />
                            <button onClick={e => {
                                e.preventDefault();
                                createCategory2({

                                    variables: {
                                        name: inputRef.value,
                                    },
                                });
                                inputRef.value = '';
                            }}> onClick</button>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <p>You clicked {count} times</p>

                    </Col>
                    <Col>
                        <button onClick={() => setCount(count + 1)}>
                            Click me</button>
                    </Col>
                </Row>
                <Row>
                    {/*      <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.category.map((item) => (


                                <tr  >
                                    <td>。</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>

                                </tr>
                            ))
                            }



                        </tbody>
                    </table> */}

                    <Table columns={columns} dataSource={data.category} onChange={onChange} />

                </Row>
            </Container>



        </div>


    );
}

export default GraphQL; //輸出App函式