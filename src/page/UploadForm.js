// excel.js 
import React, { useState } from 'react';
import { Button, message, Table } from 'antd';


import * as XLSX from 'xlsx';
import styles from '../styles/Excel.less';


//import 'antd/dist/antd.css'

import { UploadOutlined } from '@ant-design/icons';


/* 
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


]; */

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

//

let data = [];

function UploadForm() {
    const [dataList, setDataList] = useState([]);
    const [header, setHeader] = useState([]);

    function onImportExcel(file) {
        // 獲取上傳的文件對象 
        const { files } = file.target;
        // 通過FileReader對象讀取文件 
        const fileReader = new FileReader();
        fileReader.onload = event => {
            try {
                const { result } = event.target;
                // 以二進制流方式讀取得到整份excel表格對象 
                const workbook = XLSX.read(result, { type: 'binary' });
                // 存儲獲取到的數據 
                //let data = [];

                const first_worksheet = workbook.Sheets[workbook.SheetNames[0]];//是工作簿中的工作表的有序列表
                console.log('first_worksheet', first_worksheet)
                const jsonArr = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 });//將工作簿對象轉換為JSON對象數組
                uploadFilesChange(jsonArr, file);

                // 遍歷每張工作表進行讀取（這裡默認只讀取第一張表）
                for (const sheet in workbook.Sheets) {
                    // esline-disable-next-line 
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        // 利用sheet_to_json方法將excel轉成json數據 
                        data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));

                        //break; //如果只取第一張表，就取消註釋這行
                    }
                }
                // 最終獲取到並且格式化後的json數據 
                message.success('上傳成功！');

                console.log(data);

            } catch (e) {
                // 這裡可以拋出文件類型錯誤不正確的相關提示 
                message.error('文件類型不正確！');
            }
        };
        // 以二進制方式打開文件 
        fileReader.readAsBinaryString(files[0]);

    }

    /* 
        function onRemove(file) {
            this.setState(state => ({
                data: [],
                fileList: []
            }));
        }
     */
    /*     function onChange(item) {
            console.log('onChange', data)
            this.setState((state, props) => {
                return { item };
            });
        } */

    function uploadFilesChange(array, file) {
        console.log('uploadFilesChange', array);
        const headerList = array[0];
        console.log('headerList', headerList)
        setHeader(headerList);//頭部數據 ["姓名",...]
        const entozh = formatTitleOrFileld('id', 'name');//將表字段數組形式轉化為對象形式,如：{"姓名":"name",...}
        console.log(header);
        const firstRow = header.map(item => entozh[item]);//可以獲取到行屬性 ["name",...]
        const newArray = [...array];
        console.log('newArray', newArray);
        newArray.splice(0, 1);//去除表頭
        console.log('newArray2', newArray);
        const json = newArray.map((item, index) => {
            console.log('item', item)
            const newitem = {};
            item.forEach((im, i) => {
                const newKey = headerList[i] || i;
                newitem[newKey] = im
            })


            return newitem;
        });//將存在表頭定義字段的值賦值
        console.log('firstRow', firstRow);
        console.log('json', json);
        setDataList(json);
        const formatData = json.map((item, index) => ({
            name: item[index],
            age: item.age,
            address: item.address,
        }))//篩選出自己需要的屬性

        console.log('formatData', formatData);




        return formatData;
    }
    function formatTitleOrFileld(a, b) {
        const entozh = {};
        columns.forEach(item => {
            entozh[item[a]] = item[b]
        })
        return entozh;


    }
    const columns = [
        header.map((item, index) => (
            {

                title: item,
                dataIndex: item,
                defaultSortOrder: 'descend',
                sorter: (a, b) => a[item] - b[item]

            }
        ))
    ];



    console.log('columns', columns);

    function ConvertArr(dataList) {
        let obj = {}
        if (dataList.isArray) {
            Object.assign(obj, dataList);
            console.log('obj', obj);
            return obj;

        };
        console.log('dataList', dataList, 'type', typeof (dataList))
        return dataList;
    }




    return (
        <div style={{ marginTop: 100, marginLeft: 50 }}>
            <p className={styles['excelUpload-tip']}>支援.xlsx、.xls 格式的文件</p>
            <Button className={styles['excelUpload-wrap']}>
                <UploadOutlined />
                <input className={styles['excelFile-uploader']} type='file' accept='.xlsx, .xls' onChange={onImportExcel} /* onRemove={this.onRemove} */ />
                <span className={styles['excelUpload-text']}>上傳文件</span>
            </Button>
            <p />
            <p />


            {/* 
            {header.map((item, index) => (

                <p>標題{index + 1}: {item}</p>



            ))}
 */}

            <Table columns={columns[0]} dataSource={ConvertArr(dataList)} onChange={onChange} style={{ marginTop: 50 }} />
        </div >
    );

}

export default UploadForm;