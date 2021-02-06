import React, { useState, useEffect } from "react";
import StyleWrapper from "../../styles/components/styles-findbyid";
import Layouts from "../../Layouts/Layouts";
import { Divider, Input, Empty, message, Card } from "antd";
import { service } from "../../service/index";
import withAuth from "../../hoc/withAuth";

const Timeline = () => {
  return (
    <StyleWrapper>
      <Layouts></Layouts>
    </StyleWrapper>
  );
};
export default Timeline;
