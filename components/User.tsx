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

const User = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="me-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          {user?.given_name}
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
