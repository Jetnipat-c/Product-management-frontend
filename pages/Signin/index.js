import React, { useState } from "react";
import { FcButtingIn } from "react-icons/fc";
import StyleWrapper from "../../styles/components/styles-signin";
import Link from "next/link";
import { service } from "../../service/index";
function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async () => {
    let res = await service({
      url: `/auth/signin`,
      method: "post",
      data: {
        username: username,
        password: password,
      },
    });
    if (res && res.status === 200) {
      console.log(res.data);
      router.push("/home");
    } else {
      error();
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
              name="login"
              placeholder="login"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link href="/Home">
              <input type="submit" className="fadeIn fourth" value="Log In" />
            </Link>
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
