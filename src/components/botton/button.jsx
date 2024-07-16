export const Botton = ({ title, bgColor, width }) => {
  return (
    <div
      className=""
      style={{
        backgroundColor: `${bgColor}`,
        width: `${width}` ? `${width}` : "blue",
      }}
    >
      <p>{title}</p>
    </div>
  );
};
