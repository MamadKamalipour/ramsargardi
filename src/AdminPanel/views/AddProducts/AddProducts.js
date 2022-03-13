import { CFormFloating, CFormInput, CFormLabel } from "@coreui/react";
import React, { useState, useContext } from "react";
import MultiImageInput from "react-multiple-image-input";
import { ProductsContext } from "../../context/ProductsContextProvider";
import CustomDropDown1 from "../../../components/CustomDropDown1/CustomDropDown1";
function AddProducts() {
  const { categories,tags } = useContext(ProductsContext);
  const crop = {
    unit: "%",
    aspect: 16 / 9,
    width: "100",
  };
  const [images, setImages] = useState({});
  const [categorySelect , setCategorySelect] = useState({
    label: "دسته بندی ها..."
  })
  const [tagSelect , setTagSelect] = useState({    label: "برچسب ها..."})

  return (
    <form>
      <div className="container">
        {/* image Select */}
        <div className="row">
          <div className="col-12">
            <MultiImageInput
              images={images}
              setImages={setImages}
              allowCrop={true}
              max={5}
              theme="light"
              cropConfig={{ crop, ruleOfThirds: true }}
            />
          </div>
        </div>
        {/* name and price */}
        <div className="row">
          <div className="col-6">
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="productName"
                placeholder="مثال: خانه ویلایی"
              />
              <CFormLabel htmlFor="productName">نام محصول</CFormLabel>
            </CFormFloating>
          </div>
          <div className="col-6">
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="productPrice"
                placeholder="مثال: 200000"
              />
              <CFormLabel htmlFor="productPrice">قیمت</CFormLabel>
            </CFormFloating>
          </div>
        </div>
        {/* category and tags */}
        <div className="row">
          <div className="col-6">
            <CustomDropDown1
              data={categories}
              type="single"
              name="category"
              label="انتخاب دسته بندی"
              value={categorySelect}
              onValueChange={setCategorySelect}
            />
          </div>
          <div className="col-6">
          <CustomDropDown1
              data={tags}
              type="multi"
              name="category"
              defaultValue={tagSelect}
              label="انتخاب دسته بندی"
              value={tagSelect}
              onValueChange={setTagSelect}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddProducts;
