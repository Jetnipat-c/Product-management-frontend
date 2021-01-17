import Head from "next/head";
import StyleWrapper from "./styles";
import Example from "./components/Example/Example";
export default function Home() {
  return (
    <StyleWrapper>
      <Example />
    </StyleWrapper>
  );
}
