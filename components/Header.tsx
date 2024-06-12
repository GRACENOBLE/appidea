import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import Link from "next/link";
import User from "./User";import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";


const Header = async() => {

  const {
    getAccessToken,
    getBooleanFlag,
    getFlag,
    getIdToken,
    getIntegerFlag,
    getOrganization,
    getPermission,
    getPermissions,
    getRoles,
    getStringFlag,
    getUser,
    getUserOrganizations,
    isAuthenticated,
  } = getKindeServerSession();
   
  const authStatus = await isAuthenticated()
  
  return (
    <div className="py-4 border-b-[1px]">
      <Container>
        <div className="flex justify-between items-center">
          <Link href={authStatus?"/homepage":"/"}><h1>MyOnlineStore</h1></Link>
          {authStatus?<User/>:<Button className="bg-blue-600 border border-blue-600 text-white hover:bg-white hover:text-blue-600">
            <LoginLink>Sign in</LoginLink>
          </Button> }
        </div>
      </Container>
    </div>
  );
};

export default Header;
