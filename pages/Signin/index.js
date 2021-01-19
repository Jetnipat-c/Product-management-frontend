import React from "react";
import { FcButtingIn } from "react-icons/fc";
import StyleWrapper from "./styles";
import Link from "next/link";
function Signin() {
  return (
    <StyleWrapper>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <h2 class="active"> Sign In </h2>
          <h2 class="inactive underlineHover">Sign Up </h2>

          <div class="fadeIn first">
            <FcButtingIn style={{ fontSize: "20rem" }} />
          </div>

          <form>
            <input
              type="text"
              id="login"
              class="fadeIn second"
              name="login"
              placeholder="login"
            />
            <input
              type="text"
              id="password"
              class="fadeIn third"
              name="login"
              placeholder="password"
            />
            <Link href="/Home">
              <input type="submit" class="fadeIn fourth" value="Log In" />
            </Link>
          </form>

          <div id="formFooter">
            <a class="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </StyleWrapper>
  );
}

export default Signin;
