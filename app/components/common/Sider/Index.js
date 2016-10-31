import React from 'react';
import './Index.scss';

const Index = (props) => {
  return (
    <div className="page-layout-sider">
      <h1>
        <a>{props.system.name}</a>
      </h1>
      <ul>
        <li><a>概况</a></li>
        <li><a>店铺</a></li>
        <li><a>商品</a></li>
        <li><a>订单</a></li>
        <li><a>资产</a></li>
      </ul>
      <h2 className="page-sider-logo">
        <a href="#" target="_blank">{props.system.name}</a>
      </h2>
    </div>
  );
}

export default Index;
