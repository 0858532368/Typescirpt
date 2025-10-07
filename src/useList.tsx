import React, { useEffect, useState } from "react";
import axios from "axios";

// --- Interface định nghĩa kiểu dữ liệu user ---
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Gọi API khi component mount
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
      });
  }, []);

  return (
    <div style={{ display: "flex", gap: "50px", padding: "20px" }}>
      {/* Danh sách users */}
      <div>
        <h2>Danh sách người dùng</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <button onClick={() => setSelectedUser(user)}>{user.name}</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Chi tiết user */}
      <div>
        {selectedUser ? (
          <div>
            <h2>Chi tiết người dùng</h2>
            <p><strong>Tên:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Username:</strong> {selectedUser.username}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>
            <p><strong>Company:</strong> {selectedUser.company.name}</p>
            <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.city}</p>
          </div>
        ) : (
          <p>Click vào tên để xem chi tiết người dùng</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
