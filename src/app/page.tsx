import Link from "next/link";
import Popup from "./components/Popup";
import Button from "./components/Button";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;

  return (
    <>
       <div className="flex flex-col items-center justify-center min-h-screen py-2">

 <header className="text-center mb-8">
        <h1 className=" text-4xl font-bold ">Welcome to HyperSpace</h1>
        <p className="text-lg text-gray-600 mt-2">Discover the universe with us!</p>
      </header>
      <Button href="/?show=true" color="blue">Click Here</Button>


      {show && <Popup />}
      </div>
    </>
  );
}