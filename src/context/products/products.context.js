import { createContext, useState,useEffect } from "react";
import SHOP_DATA from "../../shop-data.js";
import { getCategoriesAndDocument, addCollectionAndDocuments } from "../../utils/firebase/firebase.utils.js";
export const CategoriesContext = createContext({
  categoires: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap,setCategoriesMap ] = useState({});
  useEffect(() => {
    (async () => {
      //await addCollectionAndDocuments('categories',SHOP_DATA);
       const categoryMap = await getCategoriesAndDocument();
       console.log(categoryMap);
       setCategoriesMap(categoryMap);
    })()
  },[]);
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
     
      {children}{" "}
    </CategoriesContext.Provider>
  );
};
