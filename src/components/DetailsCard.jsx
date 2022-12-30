import React from "react";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  GlobalOutlined,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import EditModal from "./EditModal";
import useStore from "../zustand/user";
const { Meta } = Card;
const DetailsCard = ({ user }) => {
  const { removeUser } = useStore((state) => state);

  return (
    <Card
      hoverable
      cover={
        <div className=" rounded-t-md bg-gray-100">
          <img
            className=" max-w-[150px] pt-10 mx-auto  "
            alt="example"
            src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
          />
        </div>
      }
      actions={[
        <HeartOutlined
          style={{ color: "red", fontSize: "20px" }}
          key="heart"
        />,
        <EditModal user={user} />,
        <DeleteOutlined
          onClick={() => removeUser(user.id)}
          style={{ fontSize: "20px" }}
          key="delete"
        />,
      ]}
    >
      <div>
        <h2 className=" text-lg font-medium">{user.name}</h2>
        <div className=" mt-5">
          <div className=" flex space-x-2  items-center">
            <MailOutlined className="text-xl" />
            <p>{user.email}</p>
          </div>
          <div className=" flex space-x-2  items-center">
            <PhoneOutlined className="text-xl" />
            <p>{user.phone}</p>
          </div>
          <div className="flex space-x-2  items-center">
            <GlobalOutlined className="text-xl" />
            <p>{user.website}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DetailsCard;
