import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Chart from "react-google-charts";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();

  console.log("props", props.graphData);

  const dummyData = [
    ["Year", "Yeild"],
    ["1992", 100],
    ["1993", 200],
    ["2016", 60],
    ["2017", 90],
  ];
  console.log("Data", props);

  const handleClose = () => {
    props.handleClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Chart
            width={"500px"}
            height={"300px"}
            chartType="Line"
            loader={<div>Loading Chart</div>}
            data={props.graphData}
            options={{
              // Material design options
              chart: {
                title: "Historic Data for " + props.cropName,
                subtitle: "Predicted Value is " + props.predictData,
              },
              vAxis: "Yield(Tonnes/Hectare)",
            }}
          />
        </Fade>
      </Modal>
    </div>
  );
}
