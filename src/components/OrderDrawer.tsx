import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Space,
  Divider,
  InputNumber,
  Button,
  notification,
  Drawer,
  Input,
  message,
  Upload,
  Select,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
const { Dragger } = Upload;
const { TextArea } = Input;

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

type Props = {
  onClose: void;
  open: Boolean;
  setProducts: void;
  editProductData: void;
  currentProduct: {};
  setCurrentProduct: void;
};

const OrderDrawer = ({
  onClose,
  open,
  setProducts,
  currentProduct,
  editProductData,
  setCurrentProduct
}: Props) => {

  const [category, setCategory] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleChangeCategory = async (value: string) => {
    console.log(value);
    setSelectedCategory(value);
  };

  const handleChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <Drawer
      title="Данные заказа"
      width={640}
      placement="right"
      closable={true}
      onClose={onClose}
      open={open}
      extra={
        <Button type="primary">
          Сохранить
        </Button>
      }
    >
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="ФИО клиента"
            content={<Input value={name} onChange={handleChangeName} />}
          />
        </Col>
        <Col span={24}>
          <DescriptionItem
            title="Чек на сумму"
            content={<Input value={price} onChange={handleChangePrice} />}
          />
        </Col>
        <Col span={24}>
          <DescriptionItem
            title="Менеджер"
            content={
              <Select
                style={{ width: "100%" }}
                defaultValue={currentProduct?.categoryId}
                options={categoryOptions}
                onChange={handleChangeCategory}
              />
            }
          />
        </Col>
        <Col span={24}>
          <DescriptionItem
            title="Описание закза"
            content={
              <TextArea
                rows={4}
                value={description}
                onChange={handleChangeDescription}
              />
            }
          />
        </Col>
      </Row>
    </Drawer>
  );
};

export default OrderDrawer;
