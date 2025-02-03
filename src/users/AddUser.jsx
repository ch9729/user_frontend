import React from "react";

const AddUser = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">유저 가입</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              {/* label과 input을 맞추기 위해선 htmlFor와 id를 동일한 이름으로 설정 */}
              이름
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="이름 입력"
              name="name"
            />
            <label htmlFor="username" className="form-label">
              유저네임
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="유저네임 입력"
              name="username"
            />
            <label htmlFor="email" className="form-label">
              이메일
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="이메일 입력"
              name="email"
            />
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-outline-primary px-3 mx-2">
              가입
            </button>
            <button type="submit" className="btn btn-outline-danger px-3 mx-2">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
