import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Syed Ismail",
          "a web designer",
          "a web developer",
          "a freelancer",
          "a graphic designer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
