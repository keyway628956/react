// excel.js 
import React, { Component } from 'react';
import { Button, message } from 'antd';
import * as XLSX from 'xlsx';
import styles from '../styles/Excel.less';

import { UploadOutlined } from '@ant-design/icons';




class Excel extends Component {
    onImportExcel = file => {
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
                let data = [];
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
                message.success('上傳成功！')
                console.log(data);
            } catch (e) {
                // 這裡可以拋出文件類型錯誤不正確的相關提示 
                message.error('文件類型不正確！');
            }
        };
        // 以二進制方式打開文件 
        fileReader.readAsBinaryString(files[0]);
    }


    onRemove = file => {
        this.setState(state => ({
            data: [],
            fileList: []
        }));
    }
    render() {
        return (
            <div style={{ marginTop: 100 }}>
                <Button className={styles['upload-wrap']}>
                    <UploadOutlined />
                    <input className={styles['file-uploader']} type='file' accept='.xlsx, .xls' onChange={this.onImportExcel} onRemove={this.onRemove} />
                    <span className={styles['upload-text']}>上傳文件</span>
                </Button>
                <p className={styles['upload-tip']}>支持.xlsx、.xls 格式的文件</p>



                <img

                    src={require("../images/test1.jpg")}
                    alt="First slide"
                />


            </div >
        );
    }
}

export default Excel;