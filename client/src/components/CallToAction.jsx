import { Button } from "flowbite-react";
import image1 from "../assets/images/hydflood4-scaled.jpg";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Get started</h2>
        <p className="text-gray-500 my-2">
          <img src={image1} alt="" sizes="" srcset="" />
        </p>
      </div>
    </div>
  );
}
