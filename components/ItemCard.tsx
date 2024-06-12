import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const ItemCard = () => {
  return (
    <div className="border w-52  rounded-md flex flex-col">
      <Image
        src={
          "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        alt={""}
        width={1000}
        height={1000}
        className=""
      />
      <p>Phone</p>
      <p>Rating</p>
      <p>Price</p>
      <div className="flex justify-end">
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ItemCard;
