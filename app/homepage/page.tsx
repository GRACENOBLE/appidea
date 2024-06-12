import React from 'react'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
const page = () => {
  return (
    <div>
      HomePage
      <LogoutLink>Log out</LogoutLink>
    </div>
  );
}

export default page
