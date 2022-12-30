import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Checkbox, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import useUser from "../zustand/user";
const EditModal = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
  });

  const { updateUser, users } = useUser((state) => state);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    updateUser(
      user.id,
      userData.email,
      userData.name,
      userData.phone,
      userData.website
    );
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    updateUser(
      user.id,
      userData.email,
      userData.name,
      userData.phone,
      userData.website
    );
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <EditOutlined
        onClick={showModal}
        style={{ fontSize: "20px" }}
        key="edit"
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            initialValue={user.name}
            label="Name"
            name="name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue={user.email}
          >
            <Input
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue={user.phone}
          >
            <Input
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Website"
            name="website"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue={user.website}
          >
            <Input
              onChange={(e) =>
                setUserData({ ...userData, website: e.target.value })
              }
            />
          </Form.Item>
          {/* submit  */}
        </Form>
      </Modal>
    </>
  );
};
export default EditModal;
