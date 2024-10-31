import { TailSpin } from "react-loader-spinner";

const LoadingComponent = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <TailSpin color="#36D7B7" loading={true} size={120} />
  </div>
);


export default LoadingComponent;