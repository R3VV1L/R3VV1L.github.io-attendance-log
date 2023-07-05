// @ts-ignore
import React from "react";
import { BurgerMenuAdmin } from "../../components/BurgerMenuAdmin/BurgerMenuAdmin.tsx";
import { Search } from "../../components/search/Search.tsx";
import { ModalGroup } from "../../components/ModalGroup/ModalGroup.tsx";

export const PrepodovateliTabl = () => {
  return (
    <div>
      <Search />
      <BurgerMenuAdmin />
      <ModalGroup />
    </div>
  );
};
