import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";

function QrCodeReader() {
  const [scannedData, setScannedData] = useState(null);
  const [constraints, setConstraints] = useState({}); // State for constraints

  useEffect(() => {
    const getCameraDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const preferredCamera = devices.find(
        (device) =>
          device.kind === "video" && device.facingMode === "environment" // Choose environment (back) facing camera
      );

      if (preferredCamera) {
        setConstraints({ video: { deviceId: preferredCamera.deviceId } });
      } else {
        // Handle no environment camera scenario (optional)
        console.warn("No environment camera found.");
      }
    };

    getCameraDevices();
  }, []); // Run on component mount

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  const handleError = (error) => {
    if (error.name === "NotFoundError") {
      console.error("Camera not found. Please check your device permissions.");
    } else if (error.name === "NotReadableError") {
      console.error(
        "Failed to access camera stream. Please check permissions."
      );
    } else if (error.name === "PermissionDeniedError") {
      console.error(
        "Camera permission denied. Please grant access in your browser settings."
      );
    } else {
      console.error("Unknown error:", error);
    }
  };

  return (
    <div>
      <QrReader
        onScan={handleScan}
        onError={handleError}
        constraints={constraints}
      />
      {scannedData && <p>Scanned Data: {scannedData}</p>}
    </div>
  );
}

export default QrCodeReader;
