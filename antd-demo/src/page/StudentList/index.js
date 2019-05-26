import React, { Component } from 'react'
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default class index extends Component {

  render() {
    return (
      <div>
        <div className='middle'>
          <Table className='list-table' columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 400 }} />
        </div>
      </div>
    )
  }
}
