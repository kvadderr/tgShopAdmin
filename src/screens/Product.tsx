import React, { useState, useEffect } from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Row,
  Statistic,
  Typography,
  DatePicker,
  Space,
  Spin,
} from "antd";

import { ProductCard } from "../components/card";

const { Title, Paragraph } = Typography;
const { RangePicker } = DatePicker;

const Product: React.FC = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://89.108.88.183:3005/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  const addItem = () => {
    products.push({ name: "", price: 0 });
    setProducts([...products]);
  };

  const removeItem = (index: number) => {
    products.splice(index, 1);
    setProducts([...products]);
  };

  const render = (
    <Space direction="vertical" size="large">
      <Space align="baseline">
        <Title>Учет продукции</Title>
        <Button style={{ marginLeft: 30 }} onClick={addItem} type="primary">
          Добавить продукт
        </Button>
      </Space>
      <Space direction="vertical" size="large">
        {products?.map((product, index) => {
          return (
            <ProductCard
              key={index}
              product={product}
              index={index}
              removeItem={removeItem}
            />
          );
        })}
      </Space>
    </Space>
  );

  const loadRender = <Spin />;

  return isLoading ? loadRender : render;
};

export default Product;
