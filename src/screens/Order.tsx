import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Row,
  Statistic,
  Typography,
  DatePicker,
  Space,
  Table,
} from "antd";
const { Title, Paragraph } = Typography;
import OrderDrawer from '../components/OrderDrawer';

const Order: React.FC = () => {
  const [loadData, setLoadData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [open, setOpen] = useState(false);

  const openProductDrawer = (record) => {
    setOpen(true);
  };

  const closeProductDrawer = () => {
    setOpen(false);
  };
  /*
  useEffect(() => {
    fetch("http://127.0.0.1:3000/order")
      .then((res) => res.json())
      .then((data) => setLoadData(data));
  }, []);
*/
  useEffect(() => {
    setOrders([]);
    loadData.map((item) => {
      const newOrder = {
        id: item.id,
        clientFIO: item.clientFIO,
        price: item.price,
        personFIO: item.person.FIO,
        currentOrder: item,
        when: item.when,
        count: item.count,
        productName: item.product.name,
      };
      setOrders((prevOrders) => [...prevOrders, newOrder]);
    });
  }, [loadData]);

  const columns = [
    {
      title: "Дата",
      dataIndex: "when",
      key: "when",
    },
    {
      title: "Клиент",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Цена",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Категория",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Редактировать",
      dataIndex: "currentProduct",
      key: "currentProduct",
      render: (record) => <a>Подробнее</a>,
    },
  ];

  return (
    <Space direction="vertical" size="large">
      <Space align="baseline">
        <Title>Заказы</Title>
        <Button style={{ marginLeft: 30 }} onClick={openProductDrawer} type="primary">
          Оформить заказ
        </Button>
      </Space>
      <Table columns={columns} dataSource={orders} />
      <OrderDrawer open={open} onClose={closeProductDrawer}/>
    </Space>
  );
};

export default Order;
