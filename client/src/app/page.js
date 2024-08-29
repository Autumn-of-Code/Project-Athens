import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
