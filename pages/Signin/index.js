import React from "react";
import { FcButtingIn } from "react-icons/fc";
import StyleWrapper from "../../styles/components/styles-signin";
import Link from "next/link";
import { service } from "../../service/index";
function Signin() {
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
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
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
