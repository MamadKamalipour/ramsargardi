import React, { useEffect, useState } from "react";
import axios from "axios";
import { fakestoreapi } from "../../../services/api";
import { titleShorten, descriptionShorten } from "../../../helpers/shorten";
import {
  CButton,
  CLink,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";
import { Link } from "react-router-dom";
const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${fakestoreapi}`)
      .then((res) => res.data)
      .then((json) => setAllProducts(json));
    console.log(allProducts);
  }, [allProducts]);

  return (
    <>
      <CRow xs={{ cols: 1, gutter: 3 }} md={{ cols: 4 }}>
        {allProducts.length > 0 ? (
          allProducts.map((item) => (
            <CCol xs key={item.id}>
              <CCard>
                <CCardImage orientation="top" src={item.image} style={{height:"200px"}}/>
                <CCardBody>
                  <CCardTitle>{titleShorten(item.title)}</CCardTitle>
                  <CCardText>{descriptionShorten(item.description)}</CCardText>
                  <Link to={`${item.id}`} >ویرایش</Link>
                </CCardBody>
              </CCard>
            </CCol>
          ))
        ) : (
          <h1>loading</h1>
        )}
      </CRow>
    </>
  );
};

export default Products;
