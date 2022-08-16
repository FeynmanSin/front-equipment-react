import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  // UploadOutlined,
  // UserOutlined,
  // VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import IndexPage from './pages/index';
import SynPage from './pages/syn';
import { getItem } from './utils/util';

import 'antd/dist/antd.css';

const { Header, Sider, Content } = Layout;
const path = require('path');
// const fs = require('fs');
// const path = require('path');
const headerItems = [
  {
    label: '多租户门户管理系统',
    key: 'index',
  },
  {
    label: '装备综合管理系统',
    key: 'syn',
  },
  {
    label: '装备应用管理系统',
    key: 'apm',
  }
]
const silderItems = [];


const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const changeHeader = (e) => {
    // console.log('>>>>>>>path', path.join(__dirname, '/index/routers/router.js'));
    navigate(e.key)
  }

  const changeSider = (e) => {

  }
  return (
    <Layout style={{ minHeight: '100vh', }}>
      <Header style={{ display: 'flex' }}>
        <img src="" alt="" />
        <span style={styles.title}>福州市教育装备应用运维管理 </span>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          onClick: () => setCollapsed(!collapsed),
          style: styles.collapsedSvg,
        })}
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['index']} items={headerItems} onClick={changeHeader} />
      </Header>
      <Layout style={{ display: 'flex', flexDirection: 'row' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={silderItems}
            onClick={changeSider}
          />

        </Sider>
        <Content
          className="site-layout-background"
          style={{
            margin: 16,
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes>
            <Route path='/' >
              <Route index path='index' element={<IndexPage />} />
              <Route path='syn' element={<SynPage />} />
            </Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

const styles = {
  title: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 19,
    marginRight: 16
  },
  collapsedSvg: {
    color: 'rgba(255, 255, 255, 1)',
    alignSelf: 'center',
    marginRight: 42,
    fontSize: 17
  }
}