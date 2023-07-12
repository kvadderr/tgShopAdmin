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

import { PersonCard } from "../components/card";

const { Title, Paragraph } = Typography;
const { RangePicker } = DatePicker;

const Staff: React.FC = () => {
  const [staff, setStaff] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:3005/person")
      .then((res) => res.json())
      .then((data) => {
        setStaff(data);
        setIsLoading(false);
      });
  }, []);

  const addItem = () => {
    staff.push({ FIO: "", position: "Менеджер", percent: 0, salary: 0 });
    setStaff([...staff]);
  };

  const removeItem = (index: number) => {
    staff.splice(index, 1);
    setStaff([...staff]);
  };

  const loadRender = (
    <Spin/>
  )

  const render = (
    <Space direction="vertical" size="large">
      <Space align="baseline">
        <Title>Персонал</Title>
        <Button style={{ marginLeft: 30 }} onClick={addItem} type="primary">
          Добавить сотрудника
        </Button>
      </Space>
      <Space direction="vertical" size="large">
        {staff?.map((person, index) => {
          return (
            <PersonCard
              key={index}
              person={person}
              index={index}
              removeItem={removeItem}
            />
          );
        })}
      </Space>
    </Space>
  );

  return isLoading ? loadRender : render;
};

export default Staff;
