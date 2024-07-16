import { useState } from "react";
import QrReader from "react-qr-scanner";

function QrCodeReader() {
  const [scannedData, setScannedData] = useState("");

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="">
      <QrReader
        delay={100} // Delay between scans in milliseconds (optional)
        style={{ height: 240, width: 320 }} // Customize size
        onError={handleError} // Handle errors (optional)
        onScan={handleScan}
        facingMode="rear"
      />
      <p>Scanned Data: {scannedData}</p>
    </div>
  );
}

export default QrCodeReader;
