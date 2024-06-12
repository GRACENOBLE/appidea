import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

const User = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const getImage = () => {
    const image: any = user !== null? user?.picture: <FaRegUser/>
    return image;
  }
  return (
    <div className="me-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <div className="flex items-center gap-2">
            <Image
              src={getImage()}
              alt={""}
              width={1000}
              height={1000}
              className="rounded-full w-10"
            />
            {user?.family_name}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <LogoutLink>
            <Button className="bg-blue-600 border border-blue-600 text-white hover:bg-white hover:text-blue-600">
              Log out
            </Button>
          </LogoutLink>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default User;
