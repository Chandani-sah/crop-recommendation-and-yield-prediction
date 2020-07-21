import React, { useState, useEffect } from "react";
import "./App.css";
import { NativeSelect, FormControl, CircularProgress } from "@material-ui/core";
import axios from "axios";
import Cards from "./component/Cards/Cards";
import styles from "./component/DistrictPicker/DistrictPicker.module.css";
import qs from "qs";
import Modal from "./component/ModalComponent/Modal";
import { csv } from "d3";
import csvFile from "./cropData.csv";

function App() {
  const [cropData, setCropData] = useState();
  const [district, setDistrict] = useState("Bangalore");
  const [loading, setLoading] = useState(true);
  const [csvData, setCsvData] = useState();

  const handleDistrictChange = (district) => {
    console.log(district);
    setDistrict(district);
  };

  async function fetchLocationData(props) {
    try {
      await axios({
        method: "post",
        url: "http://localhost:5000/location",
        data: qs.stringify({
          location: district,
        }),
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }).then((result) => setCropData(result.data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchLocationData();
    csv(csvFile).then((data) => {
      setCsvData(data);
    });
    setLoading(true);
  }, [district]);

  return (
    <div>
      <h2>Agriculture - India</h2>
      <Modal data={csvData} />
      <div className={styles.setDesign}>
        <FormControl className={styles.formControl}>
          <NativeSelect
            defaultValue=""
            onChange={(event) => handleDistrictChange(event.target.value)}
          >
            <option value="Bangalore">Bangalore</option>
            <option value="Bareilly">Bareilly</option>
            <option value="Bhatinda">Bhatinda</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="DehraDun">DehraDun</option>
            <option value="Guwahati">Guwahati</option>
            <option value="Jabalpur">Jabalpur</option>
            <option value="Jammu">Jammu</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Mangalore">Mangalore</option>
            <option value="Mysore">Mysore</option>
            <option value="Panjim">Panjim</option>
            <option value="PortBlair">PortBlair</option>
            <option value="Pune">Pune</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Ranchi">Ranchi</option>
            <option value="Shimla">Shimla</option>
            <option value="Srinagar">Srinagar</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="Varanasi">Varanasi</option>
          </NativeSelect>
        </FormControl>
      </div>
      {loading ? (
        <CircularProgress
          style={{
            marginLeft: "auto",
            display: "block",
            marginRight: "auto",
            marginTop: "20%",
          }}
        />
      ) : (
        <Cards data={cropData ? cropData : ""} city={district} />
      )}
    </div>
  );
}

export default App;
