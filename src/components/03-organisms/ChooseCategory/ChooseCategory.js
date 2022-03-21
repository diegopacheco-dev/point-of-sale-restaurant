import React, { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../../firebase/firebase";
import Heading from "../../01-atoms/Heading/Heading";
import Categories from "../../02-molecules/Categories/Categories";
import Loader from "../../01-atoms/Loader/Loader";

const ChooseCategory = ({ seleccionarCategoria, categorias, loading }) => {

  return (
    <div className="vertical-space-1">
      <Heading>Elige la categoría</Heading>
      <Categories
        categories={categorias}
        seleccionarCategoria={seleccionarCategoria}
      />
    </div>
  );
};

export default ChooseCategory;
