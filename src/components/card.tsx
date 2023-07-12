import { useState } from "react";
import {
  Button,
  Select,
  Col,
  Row,
  Statistic,
  Typography,
  DatePicker,
  Space,
  Input,
  notification,
} from "antd";
import { staffOptions } from "../data/menuItems";
const { Title, Paragraph } = Typography;

export const PersonCard = (item) => {
  const idx = item.index;
  const [api, contextHolder] = notification.useNotification();
  const [FIO, setFIO] = useState(item.person.FIO);
  const [percent, setPercent] = useState(item.person.percent);
  const [position, setPosition] = useState(item.person.position);
  const [salary, setSalary] = useState(item.person.salary);
  const [id] = useState(item.person.id);

  const openNotification = () => {
    api.open({
      message: "Данные обновлены",
      description: "Данные успешно обновлены в БД.",
    });
  };

  const remove = async (idx) => {
    item.removeItem(idx);
    if (item.id != undefined) {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      };
      await fetch("http://127.0.0.1:3000/person", requestOptions);
    }
  };

  const save = async () => {
    const data = {
      FIO: FIO,
      percent: percent,
      position: position,
      salary: salary,
      id: id,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    await fetch("http://127.0.0.1:3000/person", requestOptions);
    openNotification();
  };

  const handleChange = (value: string) => {
    setPosition(value);
  };

  return (
    <Space direction="vertical" size="small">
      {contextHolder}
      <Input
        addonBefore="ФИО"
        onChange={(e) => setFIO(e.target.value)}
        placeholder="Введите ФИО"
        defaultValue={item.person.FIO}
      />
      <Space wrap>
        <Input
          addonBefore="Процент от продаж"
          onChange={(e) => setPercent(e.target.value)}
          placeholder="%"
          defaultValue={item.person.percent}
        />
        <Input
          addonBefore="Оклад"
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Оклад"
          defaultValue={item.person.salary}
        />
        <Select
          defaultValue={item.person.position}
          style={{ width: 200 }}
          onChange={(e) => setPosition(e)}
          options={staffOptions}
        />
      </Space>
      <Space align="baseline">
        <Button type="dashed" onClick={save}>
          Сохранить
        </Button>
        <Button danger onClick={remove}>
          Удалить пункт
        </Button>
      </Space>
    </Space>
  );
};

export const ProductCard = (item) => {
  const idx = item.index;
  const [api, contextHolder] = notification.useNotification();

  const [name, setName] = useState(item.product.name);
  const [price, setPrice] = useState(item.product.price);
  const [id] = useState(item.product.id);

  const openNotification = () => {
    api.open({
      message: "Данные обновлены",
      description: "Данные успешно обновлены в БД.",
    });
  };

  const remove = async (idx) => {
    item.removeItem(idx);
    if (item.id != undefined) {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      };
      await fetch("http://127.0.0.1:3000/product", requestOptions);
    }
  };

  const save = async () => {
    const data = {
      name: name,
      price: price,
      id: id,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    await fetch("http://127.0.0.1:3000/product", requestOptions);
    openNotification();
  };

  const handleChange = (value: string) => {
    setPosition(value);
  };

  return (
    <Space wrap>
      {contextHolder}
      <Input
        addonBefore="Продукт"
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите название"
        defaultValue={item.product.name}
      />
      <Input
        addonBefore="Закупочная стоимость"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="0"
        defaultValue={item.product.price}
      />
      <Space align="baseline">
        <Button type="dashed" onClick={save}>
          Сохранить
        </Button>
        <Button danger onClick={remove}>
          Удалить пункт
        </Button>
      </Space>
    </Space>
  );
};
