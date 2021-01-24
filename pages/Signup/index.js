import React from "react";
import { FcButtingIn } from "react-icons/fc";
import StyleWrapper from "./styles";
import Link from "next/link";
function Signup() {
  return (
    <StyleWrapper>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="inactive underlineHover">
            <a href="/">Sign In</a>
          </h2>
          <h2 className="active">Sign Up </h2>

          <div className="fadeIn first">
            <FcButtingIn style={{ fontSize: "20rem" }} />
          </div>

          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="signup"
              placeholder="Sign up"
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="signup password"
              placeholder="password"
            />
            <Link href="/Home">
              <input type="submit" className="fadeIn fourth" value="Sign Up" />
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

export default Signup;
