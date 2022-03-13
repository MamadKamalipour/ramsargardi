import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";
import { titleShorten, descriptionShorten } from "../../../helpers/shorten";
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
  CPlaceholder,
  CButton,
} from "@coreui/react";
import { Link } from "react-router-dom";
const Products = () => {
  const { products } = useContext(ProductsContext);
  const placeHolederData = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <CRow xs={{ cols: 1, gutter: 3 }} md={{ cols: 4 }}>
        {products.length > 0 ? (
          products.map((item) => (
            <CCol xs key={item.id}>
              <CCard>
                <CCardImage
                  orientation="top"
                  src={item.image}
                  style={{ height: "200px" }}
                />
                <CCardBody>
                  <CCardTitle>{titleShorten(item.title)}</CCardTitle>
                  <CCardText>{descriptionShorten(item.description)}</CCardText>
                  <CButton color="warning" className="me-2">
                    <Link to={`${item.id}`}>ویرایش</Link>
                  </CButton>
                  <CButton color="danger">پاک کردن</CButton>
                </CCardBody>
              </CCard>
            </CCol>
          ))
        ) : (
          <>
            {placeHolederData.map(() => (
              <CCol xs key={Math.random()}>
                <CCard style={{ width: "18rem" }}>
                  <CCardImage
                    component="svg"
                    orientation="top"
                    width="100%"
                    height="162"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                  </CCardImage>
                  <CCardBody>
                    <CPlaceholder
                      component={CCardTitle}
                      animation="glow"
                      xs={7}
                    >
                      <CPlaceholder xs={6} />
                    </CPlaceholder>
                    <CPlaceholder component={CCardText} animation="glow">
                      <CPlaceholder xs={7} />
                      <CPlaceholder xs={4} />
                      <CPlaceholder xs={4} />
                      <CPlaceholder xs={6} />
                      <CPlaceholder xs={8} />
                    </CPlaceholder>
          
                  </CCardBody>
                </CCard>
              </CCol>
            ))}
          </>
        )}
      </CRow>
    </>
  );
};

export default Products;
