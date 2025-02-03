import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]); // 유저 목록

  const loadUsers = () => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const deleteUser = async (id) => {
    if (window.confirm("정말 유저를 삭제하시겠습니까?")) {
      await axios.delete(`http://localhost:8080/users/${id}`);
      loadUsers();
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div className="container">
      <table className="table border shadow my-4 text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">액션</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/viewuser/${user.id}`}
                  className="btn btn-outline-secondary mx-2"
                >
                  보기
                </Link>
                <Link
                  to={`/edituser/${user.id}`}
                  className="btn btn-outline-warning mx-2"
                >
                  수정
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="btn btn-outline-danger mx-2"
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
