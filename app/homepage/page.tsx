import React from 'react'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Image from 'next/image';

const page = async() => {

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
     const user = await getUser()
     console.log(user);
     //console.log(await isAuthenticated());
  return (
    <div>
      HomePage
      <div>{user?.given_name}{user?.family_name}</div>
      <LogoutLink>Log out</LogoutLink>
    </div>
  );
}

export default page
