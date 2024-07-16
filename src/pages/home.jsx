// import QRCode from "react-qr-code";
import Owner from "../components/qr-code/generateQrCode";
import QrCodeReader from "../components/qr-code/qrCodeReader";

export const LandingPage = () => {
  return (
    <div>
      <Owner />
      {/* <QRCode value="<h1>hello world </h1>" /> */}
      <QrCodeReader />
    </div>
    // <div className="container-fluid ">
    //   <div className="row vh-100">
    //     <div
    //       className="col-lg-12 bg-dark h-50"
    //       style={{ alignContent: "center" }}
    //     >
    //       <h1 style={{ color: "white", textAlign: "center" }}>
    //         Find anything <br /> in <br />{" "}
    //         <span style={{ fontSize: "100px" }}>DUTSE</span>
    //       </h1>
    //     </div>
    //   </div>
    // </div>
  );
};
