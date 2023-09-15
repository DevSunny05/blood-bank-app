import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/layout/Layout";
import Modal from "../components/shared/modal/Modal";

const HomePage = () => {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h4 className="ms-4 py-4" style={{ cursor: "pointer",display:'flex',alignItems:'center', }}>
            <i style={{marginRight:'10px'}} className="fa-solid fa-plus text-success "></i>
            <p
                style={{paddingTop:'10px',cursor:'pointer'}}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Inventory
            </p>
          </h4>

          <Modal />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
