import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Syed Ismail",
          "UI/UX Specialist",
          "Graphic Designer",
          "Custom Web Solutions",
          "PPT Expert",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
