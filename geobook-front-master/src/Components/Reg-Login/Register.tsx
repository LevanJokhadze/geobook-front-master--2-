import { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import "./reg.css";

interface FormData {
  company: string;
  email: string;
  password: string;
  rePassword: string;
  address: string;
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    company: "",
    email: "",
    password: "",
    rePassword: "",
    address: ""
  });
  const [message, setMessage] = useState<string | null>(null); // State to hold the message

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/MVC/Controllers/Register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      setMessage(data.message); // Set the message from PHP response

      if (data.status === "success") {
        window.location.href = './Login';
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="mt-24 mx-auto wd-50 mb-16">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">
              კომპანიის სახელი
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline br-10"
              id="company"
              placeholder="ბილიარდის სახლი"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

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

          <div className="mb-3">
            <label htmlFor="rePassword" className="form-label">
              გაიმეორე პაროლი
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline br-10"
              id="rePassword"
              placeholder="**************"
              value={formData.rePassword}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              ობიექტის მისამართი
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline br-10"
              id="address"
              placeholder="ყაზბეგის 7"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Conditionally render the message if it exists */}
          {message && <div className="text-red-500 mb-2 text-center text-lg">{message}</div>}
          
          <button type="submit" className="btn btn-primary btn-center">
            რეგისტრაცია
          </button>
        </form>

        <div className="text-3xl mt-8 text-center">
          თუ გაქვს აქაუნთი -{" "}
          <Link className="text-[#92C7CF]" to="/Login">
            შესვლა
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
