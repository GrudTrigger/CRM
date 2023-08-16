import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { serverPath } from "../helpers/variables";

const AddForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("course-html");
  const [status, setStatus] = useState("new");

  const navigate = useNavigate();

  const clearForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setProduct("");
  };

  const currentData = () => {
    const data = new Date();

    const day = data.getDate();
    const month = data.getMonth() + 1;
    const year = data.getFullYear();

    const formattedData = `${day}.${month}.${year}`;

    return formattedData;
  };

  const handleSumbmit = (e) => {
    e.preventDefault();

    const apllication = {
      name,
      phone,
      email,
      product,
      date: currentData(),
      status,
    };

    fetch(serverPath + "applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(apllication),
    }).then(() => {
      console.log("New post was added!");
      clearForm();
      navigate("/table");
    });
  };

  return (
    <form id="form" method="POST" action="" onSubmit={handleSumbmit}>
      <label>Ваши данные:</label>
      <div className="form-group">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="name"
          type="text"
          name="name"
          autoComplete="on"
          className="form-control"
          placeholder="Имя и Фамилия"
          required
        />
      </div>
      <div className="form-group">
        <input
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          id="phone"
          type="text"
          name="phone"
          autoComplete="on"
          className="form-control"
          placeholder="Телефон"
        />
      </div>
      <div className="form-group">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          type="email"
          name="email"
          autoComplete="on"
          className="form-control"
          placeholder="Email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Продукт:</label>
        <select
          value={product}
          onChange={(e) => {
            setProduct(e.target.value);
          }}
          id="product"
          name="product"
          className="form-control"
        >
          <option value="course-html">Курс по верстке</option>
          <option value="course-js">Курс по JavaScript</option>
          <option value="course-vue">Курс по VUE JS</option>
          <option value="course-php">Курс по PHP</option>
          <option value="course-wordpress">Курс по WordPress</option>
        </select>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-lg btn-primary btn-block">
          Оформить заявку
        </button>
      </div>
    </form>
  );
};

export default AddForm;
