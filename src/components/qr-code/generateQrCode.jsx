import { useState } from "react";
import QRCode from "react-qr-code";

const Owner = () => {
  const [restaurantUrl, setRestaurantUrl] = useState("");

  const handleUrlChange = (event) => {
    setRestaurantUrl(event.target.value);
  };

  const generateQRCode = () => {
    // Handle potential URL validation here
    return restaurantUrl;
  };

  return (
    <div className="container">
      <h1>Create QR Code for Menu</h1>
      <input
        type="text"
        placeholder="Enter Restaurant Website URL"
        value={restaurantUrl}
        onChange={handleUrlChange}
      />
      <button onClick={generateQRCode}>Generate QR Code</button> <br /> <br />
      {restaurantUrl && <QRCode value={restaurantUrl} size={256} />}
    </div>
  );
};

export default Owner;
