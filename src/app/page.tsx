import Main from "@/components/Main";
import Teaser from "@/components/Teaser";
import { isTeaser } from "@/libs/utils";

export default function Home() {
  return <>{isTeaser ? <Teaser /> : <Main />}</>;
}
