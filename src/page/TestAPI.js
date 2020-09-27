import React, { useState, useEffect } from 'react';



// 
import { Table } from 'antd';




//import useSocket from 'socket.io-client';
const columns = [
    {
        title: '農產品代碼',
        dataIndex: 'CropCode',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.CropCode - b.CropCode,
    },
    {
        title: '農產品名稱',
        dataIndex: 'CropName',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.CropName.length - b.CropName.length,
    },
    {
        title: '市場名稱',
        dataIndex: 'MarketName',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.MarketName.length - b.MarketName.length,
    },
    {
        title: '交易日期',
        dataIndex: 'TransDate',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.TransDate - b.TransDate,
    },
    {
        title: '市場代號',
        dataIndex: 'MarketCode',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.MarketCode - b.MarketCode,
    },
    {
        title: '上價(元/公斤)',
        dataIndex: 'Upper_Price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.Upper_Price - b.Upper_Price,
    },
    {
        title: '中價(元/公斤)',
        dataIndex: 'Middle_Price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.Middle_Price - b.Middle_Price,
    },
    {
        title: '下價(元/公斤)',
        dataIndex: 'Lower_Price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.Lower_Price - b.Lower_Price,
    },
    {
        title: '平均價(元/公斤)',
        dataIndex: 'Avg_Price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.Avg_Price - b.Avg_Price,
    },
    {
        title: '交易量(公斤)',
        dataIndex: 'Trans_Quantity',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.Trans_Quantity - b.Trans_Quantity,
    },





];





function TestAPI() {

    const [dataList, setDataList] = useState([]);
    const [total, setTotal] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);

    // 相似於 componentDidMount 和 componentDidUpdate:
    useEffect(() => {

        // GET request using fetch with error handling
        fetch('https://agridata.coa.gov.tw/api/v1/AgriProductsTransType')
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                const dataArray = data.Data;
                setDataList(dataArray);


                //setTotal(data.Data);
                console.log('data', data.Data, 'total', data.total)

            })
            .catch(error => {
                //setErrorMessage(error.toString);
                console.error('There was an error!', error);
            });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);



    return (
        <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
            OPENDATA
            <Table columns={columns} dataSource={dataList}
                scroll={{ x: 'calc(700px + 50%)', y: 500 }} />

        </div>

    );
}

export default TestAPI; //輸出App函式