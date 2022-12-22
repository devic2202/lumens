import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Divider, Progress } from "antd";
import React from "react";
import LumensDetails from "../LumensDetails";
import LumensMenu from "../LumensMenu";
import "./lumens.scss";

Lumens.propTypes = {};

function Lumens(props) {
  return (
    // <Row gutter={32} type="flex">
    //   <Col xs={24} md={12}>
    <div className="lumens">
      <div className="title">
        <p className="btn-back">
          <LeftOutlined />
        </p>
        <h1>Silver Tier</h1>
        <p>
          In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
          exclusive rewards.
        </p>
      </div>
      <div className="sub-title">
        <p className="title-value">Available Coin balance</p>
        <p className="value">340</p>
        <Progress percent={70} showInfo={false} />
        <p className="text">
          You have paid rental fee for $1,200. Pay more $800 to achieve Gold
          Tier.
        </p>
        <p className="text-tier">
          <a href="/">
            View tier benefits <RightOutlined />
          </a>
        </p>
        <Button type="primary">
          <span>My Coupons</span>
        </Button>
        <p className="update">Updated: 02/11/2021</p>
      </div>
      <LumensDetails />
      <Divider />
      <LumensMenu />
    </div>
  );
}

export default Lumens;
