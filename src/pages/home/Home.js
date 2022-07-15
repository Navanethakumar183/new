import React from "react";
import "antd/dist/antd.css";
import { Breadcrumb, Menu } from "antd";
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Widget from "../../Components/widget/Widget";
import Chart from "../../Components/chart/Chart";
import Com from "../../Components/bar/Bar";
import Table from "../../Components/table/Table";
import "./home.css";


export default function Home() {
 

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="http://localhost:3000/">Component</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="http://localhost:3000/products">General</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="charts">
          <Com />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Table</div>
          <Table />
        </div>
      </div>
    </div>
  );
}
