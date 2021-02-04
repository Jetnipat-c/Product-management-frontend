import React, { useEffect, useState } from "react";
import { service } from "./../service/index";
import Router from "next/router";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import StyleWrapper from "./styles_withAuth";
export default (WarpComponent) => {
  const withAuth = (props) => {
    const [isAuthen, setIsAuthen] = useState(false);
    const antIcon = <LoadingOutlined style={{ fontSize: 45 }} spin />;
    useEffect(() => {
      checkAuthentication();
    }, []);
    const checkAuthentication = async () => {
      let token = await localStorage.getItem("token");
      if (token) {
        let res = await service({
          url: "/auth/sign_token",
          method: "post",
          token: token,
        });
        if (res && res.status === 200) {
          setIsAuthen(true);
          //Router.push("/Home");
        } else {
          localStorage.removeItem("token");
          Router.push("/Signin");
        }
      } else {
        Router.push("/Signin");
      }
    };
    return (
      <>
        {isAuthen ? (
          <WarpComponent {...props} />
        ) : (
          <StyleWrapper>
            <div className="container">
              <Spin indicator={antIcon} />
            </div>
          </StyleWrapper>
        )}
      </>
    );
  };
  return withAuth;
};
