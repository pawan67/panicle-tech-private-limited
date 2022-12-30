import DetailsCard from "./components/DetailsCard";
import axios from "axios";

import useStore from "./zustand/user";
import { useEffect, useState } from "react";
import { Spin } from "antd";
const App = () => {
  const { users, setUsers } = useStore((state) => state);
  const [isLoading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setLoading(false);
    return data;
  };

  const setUsersData = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };

  useEffect(() => {
    if (users.length > 0) {
      setLoading(false);
    } else {
      setUsersData();
    }
  }, []);

  return (
    <>
      {isLoading && (
        <h1 className=" mt-10 flex justify-center items-center">
          <Spin />
        </h1>
      )}
      <div className=" p-10 gap-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {users &&
          users.map((user) => <DetailsCard key={user.id} user={user} />)}
      </div>
    </>
  );
};

export default App;
