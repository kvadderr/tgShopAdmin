import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Row,
  Statistic,
  Typography,
  DatePicker,
  Space,
  Card,
  Table,
  Descriptions,
} from "antd";

import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  LikeOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const Analytics: React.FC = () => {
  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <Row gutter={16}>
        <Col span={6}>
          <Statistic title="Прибыль" value="15100 ₽" prefix={<LikeOutlined />} />
        </Col>
        <Col span={6}>
          <Statistic title="Маржинальность" value="213%" />
        </Col>
        <Col span={6}>
          <Statistic title="Клиент" value="1 294 ₽"/>
        </Col>
        <Col span={6}>
          <Statistic title="Средний чек" value="7 234 ₽"/>
        </Col>
      </Row>
      <Descriptions>
        <Descriptions.Item label="Выручка">267 640 ₽</Descriptions.Item>
        <Descriptions.Item label="Себестоимость">85 963 ₽</Descriptions.Item>
        <Descriptions.Item label="Заплаты">130 657 ₽</Descriptions.Item>
        <Descriptions.Item label="Реклама">47 900,00 ₽</Descriptions.Item>
        <Descriptions.Item label="Расходы">104 798,00 ₽</Descriptions.Item>
        <Descriptions.Item label="Клиенты">37
        </Descriptions.Item>
      </Descriptions>
    </Space>
  );
};

export default Analytics;
