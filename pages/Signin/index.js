import React, { useState } from "react";
import { FcButtingIn } from "react-icons/fc";
import StyleWrapper from "../../styles/components/styles-signin";
import { useRouter } from "next/router";
import { service } from "../../service/index";
function Signin() {
  const router = useRouter();
  const [signInfo, setSignInfo] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async () => {
    let res = await service({
      url: `/auth/signin`,
      method: "post",
      data: {
        signInfo: signInfo,
        password: password,
      },
    });
    if (res && res.status === 200) {
      sessionStorage.setItem(
        "token",
        JSON.parse(JSON.stringify(res.data.access_token))
      );
      sessionStorage.setItem("account", JSON.stringify(res.data.payload));
      router.push("/Home");
    } else {
      alert("error");
    }
  };
  return (
    <StyleWrapper>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Sign In </h2>
          <h2 className="inactive underlineHover">
            <a href="/Signup">Sign Up</a>
          </h2>

          <div className="fadeIn first">
            <FcButtingIn style={{ fontSize: "20rem" }} />
          </div>

          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="signInfo"
              placeholder="login"
              onChange={(e) => setSignInfo(e.target.value)}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="button"
              className="fadeIn fourth"
              value="Log In"
              onClick={handleClick}
            />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </StyleWrapper>
  );
}

export default Signin;
