import { Chart } from "react-google-charts";

export const Charty = () => {
  return (
    <div className="w-10/12 mt-24">
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        className="ch"
      />
    </div>
  );
};

export const data = [
  ["თვე", "მომხმარებლების რაოდენობა", "შემოსავალი", "შეფასებების რაოდენობა"],
  ["I", 34, 242, 200],
  ["II", 24, 10, 250],
  ["III", 660, 235, 300],
  ["IV", 130, 540, 350],
  ["V", 130, 540, 350],
  ["VI", 43, 53, 23],
  ["VII", 103, 50, 350],
  ["VIII", 130, 58, 30],
  ["IX", 100, 440, 30],
  ["X", 38, 40, 50],
  ["XI", 10, 540, 30],
  ["XII", 10, 50, 350],


];
