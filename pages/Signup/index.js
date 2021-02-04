import React, { useState } from "react";
import { FcButtingIn } from "react-icons/fc";
import StyleWrapper from "../../styles/components/styles-signup";
import Link from "next/link";
import { useRouter } from "next/router";
import { service } from "../../service/index";
const Signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  console.log(email);
  const handleClick = async () => {
    let res = await service({
      url: `/auth/signup`,
      method: "post",
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
    if (res && res.status === 200) {
      console.log(res.data);
      router.push("/");
    } else {
      error();
    }
  };
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
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="signup password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link href="/Home">
              <input
                type="submit"
                className="fadeIn fourth"
                value="Sign Up"
                onClick={handleClick}
              />
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
};

export default Signup;
