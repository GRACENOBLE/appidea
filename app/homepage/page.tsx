import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Container from "@/components/Container";
import ItemCard from "@/components/ItemCard";

const page = async () => {
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
  const user = await getUser();
  console.log(user);
  //console.log(await isAuthenticated());
  return (
    //This is going to have a customized feed by AI
    <div>
      <Container>
        HomePage
        <ItemCard />
      </Container>
    </div>
  );
};

export default page;
