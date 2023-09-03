import Image from "next/image";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <>
      <main className="h-screen flex flex-col items-center justify-center space-y-4 ">
        <h1 className=" text-6xl font-mono font-bold text-stone-800">
          {" "}
          CubingDB.com{" "}
        </h1>
        <p className="font-mono text-lg">Coming Soon</p>
      </main>
    </>
  );
}
