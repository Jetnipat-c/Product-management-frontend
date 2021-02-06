import styled from "styled-components";
const StyleWrapper = styled.div`
  *,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Prompt", sans-serif;
  }
  :root {
    --primary: #22d2a0;
    --secondary: #192824;
    --background: #192824;
    --green: #1fc11b;
    --yellow: #ffd913;
    --orange: #ff9c55;
    --red: #ff5555;
    --gray: #7f7f7f;
    --reddg: #e2071b;
    --buledg: #212554;
  }
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
  .logo h1 {
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 10px;
    word-wrap: break-word;
  }
  .ant-menu-submenu-title,
  .ant-menu-item .anticon + span {
    font-size: 1.2rem;
  }
  .site-back-top-basic {
    color: rgba(64, 64, 64, 0.6);
  }

  @media only screen and (min-width: 768px) {
  }
`;
export default StyleWrapper;
