import React, { useState } from "react";
import InputType from "./InputType";

const Form = ({ formType, submitbtn, title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <form>
        <h1
          className="text-center  "
          style={{ marginTop: 100, marginBottom: 20 }}
        >
          {title}
        </h1>
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
            <label htmlFor="organisationRadio" className="form-check-label">
              Organisation
            </label>
          </div>
        </div>
        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    label={"Email"}
                    labelFor={"forEmail"}
                    name={"email"}
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <InputType
                    label={"Password"}
                    labelFor={"forPassword"}
                    name={"password"}
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }

            case formType === "register": {
              return (
                <>
                  {(role === "admin" || role === "donar") && (
                    <InputType
                      label={"Name"}
                      labelFor={"forName"}
                      name={"name"}
                      type={"name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}

                  <InputType
                    label={"Email"}
                    labelFor={"forEmail"}
                    name={"email"}
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <InputType
                    label={"Password"}
                    labelFor={"forPassword"}
                    name={"password"}
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {role === "organisation" && (
                    <InputType
                      label={"Organisation Name"}
                      labelFor={"forOrganisationName"}
                      name={"organisationName"}
                      type={"text"}
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}

                  {role === "hospital" && (
                    <InputType
                      label={"Hospital Name"}
                      labelFor={"forHospitalName"}
                      name={"hospitalName"}
                      type={"text"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}

                  <InputType
                    label={"Website"}
                    labelFor={"forWebsite"}
                    name={"website"}
                    type={"text"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />

                  <InputType
                    label={"Address"}
                    labelFor={"forAddress"}
                    name={"adderss"}
                    type={"text"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  <InputType
                    label={"Phone"}
                    labelFor={"forPhone"}
                    name={"phone"}
                    type={"text"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex">
          <button className="btn btn-primary" type="submit">
            {submitbtn}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
