import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/layout/Layout";
import Modal from "../components/shared/modal/Modal";
import axios from "axios";
import moment from 'moment'

const HomePage = () => {
  const { loading } = useSelector((state) => state.alerts);
  const [data, setData] = useState([]);

  //   get blood records
  const getBloodRecords = async () => {
    try {
      const { data } = await axios.get("/api/v1/inventry/get-inventry", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data?.success) {
        setData(data?.inventry);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
    getBloodRecords();
  }, []);
  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            <h4
              className="ms-4 py-4"
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                style={{ marginRight: "10px" }}
                className="fa-solid fa-plus text-success "
              ></i>
              <p
                style={{ paddingTop: "10px", cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Inventory
              </p>
            </h4>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Inventry Type</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Donar Email</th>
                  <th scope="col">Time & Date</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((record)=>(
                    <tr key={record._id}>
                        <td>{record.bloodGroup}</td>
                        <td>{record.inventryType}</td>
                        <td>{record.quantity}</td>
                        <td>{record.donarEmail}</td>
                        <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                    </tr>
                ))}
                
              </tbody>
            </table>

            <Modal />
          </div>
        </>
      )}
    </Layout>
  );
};

export default HomePage;
