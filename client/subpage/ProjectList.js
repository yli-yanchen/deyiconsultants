import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PrivateLayout from "../components/PrivateLayout";
import axios from "../hook/axios";

const ProjectList = () => {
  return (
    <PrivateLayout >
      <h1 className=""> Welcome to Project Dashboard! </h1>
    </PrivateLayout>
  );
};

export default ProjectList;
