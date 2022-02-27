import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
const CustomRadioButton1 = ({
  data,
  groupname,
  label,
  mainColor,
  value,
  onValueChange,
}) => {
  // styles
  const Residencetype = styled.div`
    color: #333;
    padding: 1rem;
    padding-top: 0;
    & label {
      font-size: 1.1rem;
      font-weight: bold;
      padding: 10px;
      padding-right: 0;
    }
    & input {
      label {
        span {
          font-size: 0.8rem;
          font-weight: bold;
        }
      }
    }
  `;

  const RadioButtons = styled.div`
    direction: rtl;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    background-color: transparent;
    & .col-sm {
      border: 1px solid #333;
    }

    label {
      padding: 1rem 2rem;
      font-size: 80%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        cursor: pointer;
        display: none;
      }
    }
  `;

  const onChangeHandler = (value) => {
    onValueChange(value);
  };

  return (
    <Residencetype>
      <label htmlFor="" className="residence__type__label">
        {label}
      </label>
      <RadioButtons className="residence__type__input">
        <Row>
          {data.length < 5
            ? data.map((item) => (
                <Col sm md className="p-0" key={item.value}>
                  <label
                    style={
                      value === item.value ? { backgroundColor: mainColor } : {}
                    }
                    htmlFor={item.htmlId}
                  >
                    <span>{item.type}</span>
                    <input
                      type="radio"
                      id={item.htmlId}
                      name={groupname}
                      value={item.value}
                      onChange={(e) => {
                        const { value } = e.target;
                        onChangeHandler(value);
                      }}
                    />
                  </label>
                </Col>
              ))
            : console.log("بیشتراز 4 آیتم ورودی داده شد")}
        </Row>
      </RadioButtons>
    </Residencetype>
  );
};

export default React.memo(CustomRadioButton1);
