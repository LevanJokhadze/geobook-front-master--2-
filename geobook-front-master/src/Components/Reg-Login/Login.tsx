
import { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import "./reg.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState<string>(""); // State for error message

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/MVC/Controllers/Login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        // If response is not okay, throw an error
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log(data); // Handle the response from PHP
      setErrorMessage(data.message); // Set error message

      if (data.status === "success") {
        window.location.href = './Admin/Profile';
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-24 mx-auto wd-50">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            ემაილი
          </label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline br-10"
            id="email"
            placeholder="info@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            პაროლი
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline br-10"
            id="password"
            placeholder="**************"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {errorMessage && <div className="text-red-500 mt-2 text-center text-lg">{errorMessage}</div>}
        <button type="submit" className="btn btn-primary btn-center">
          შესვლა
        </button>
      </form>

      <div className="text-3xl mt-8 text-center">
        თუ არ გაქვს აქაუნთი -{" "}
        <Link className="text-[#92C7CF]" to="/Register">
          რეგისტრაცია
        </Link>
      </div>
    </div>
  );
};

export default Login;
