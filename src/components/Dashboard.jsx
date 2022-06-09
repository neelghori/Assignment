import React from "react";
import Answer from "./Answer";
import Question from "./Question";

const Dashboard = () => {
  return (
    <div>
      <div className="container p-3">
        <div className="row">
          <div className="col-lg-6">
            <Question />
          </div>
          <div className="col-lg-6">
            <Answer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
