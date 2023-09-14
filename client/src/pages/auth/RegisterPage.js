import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InputType from "../../components/shared/forms/InputType";
import { hideLoading, showLoading } from "../../redux/features/alertSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/shared/Spinner";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.alerts);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      dispatch(showLoading());
      const { data } = await axios.post("/api/v1/auth/register", {
        name ,role,email,password,organisationName,hospitalName,website,address,phone
      });

      if (data.success) {
        dispatch(hideLoading());
        toast.success("Registerd Successful");
        navigate("/login");
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Invalid details..Please try again  ");
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="form-container">
          <h2 className="m-4">Register Form</h2>
          <form className="card p-4" onSubmit={handleSubmit}>

            <div className="radio-container">
              <div className="d-flex mb-3">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="role"
                    id="donarRadio"
                    value={"donar"}
                    onChange={(e) => setRole(e.target.value)}
                    defaultChecked
                  />
                  <label htmlFor="donarRadio" className="form-check-label">
                    Donar
                  </label>
                </div>

                <div className="form-check ms-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="role"
                    id="adminRadio"
                    value={"admin"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label htmlFor="adminRadio" className="form-check-label">
                    Admin
                  </label>
                </div>

                <div className="form-check ms-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="role"
                    id="hospitalRadio"
                    value={"hospital"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label htmlFor="hospitalRadio" className="form-check-label">
                    Hospital
                  </label>
                </div>

                <div className="form-check ms-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="role"
                    id="organisationRadio"
                    value={"organisation"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label
                    htmlFor="organisationRadio"
                    className="form-check-label"
                  >
                    Organisation
                  </label>
                </div>
              </div>
            </div>

            {(role === "admin" || role === "donar") && (
              <InputType
                labelText={"Name"}
                htmlFor={"forName"}
                name={"name"}
                type={"name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <InputType
              htmlFor="email"
              labelText="Email:"
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name={"email"}
            />

            <InputType
              labelText={"Password"}
              htmlFor={"forPassword"}
              name={"password"}
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {role === "organisation" && (
              <InputType
                labelText={"Organisation Name"}
                htmlFor={"forOrganisationName"}
                name={"organisationName"}
                type={"text"}
                value={organisationName}
                onChange={(e) => setOrganisationName(e.target.value)}
              />
            )}

            {role === "hospital" && (
              <InputType
                labelText={"Hospital Name"}
                htmlFor={"forHospitalName"}
                name={"hospitalName"}
                type={"text"}
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
              />
            )}

            <InputType
              labelText={"Website"}
              htmlFor={"forWebsite"}
              name={"website"}
              type={"text"}
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

            <InputType
              labelText={"Address"}
              htmlFor={"forAddress"}
              name={"adderss"}
              type={"text"}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <InputType
              labelText={"Phone"}
              htmlFor={"forPhone"}
              name={"phone"}
              type={"text"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <div className="d-flex">
              <p className="me-4">
                Already Registerd? <Link to="/login">Login</Link>
              </p>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default RegisterPage;
