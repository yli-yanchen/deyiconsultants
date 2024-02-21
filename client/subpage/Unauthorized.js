import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section>
      <h1> Unauthorized </h1>
      <p>You do not hahve access to the requested page.</p>
      <div>
        <button onClick={goBack}> Go Back </button>
      </div>
    </section>
  );
};

export default Unauthorized;
