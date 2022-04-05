import React from "react";

const Table = ({ data }) => {
  return (
    <main id="mainAboutUs">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ارزش ها</th>
              <th scope="col">توضیحات</th>
            </tr>
          </thead>
          <tbody>
            {data.map((option) => (
              <React.Fragment key={option.id}>
                <tr>
                  <td className="about-us-table-title">
                    <i class="fa-solid fa-circle fa-2xs about-us-icons"></i> {option.title}
                  </td>
                  <td>{option.desc}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Table;
