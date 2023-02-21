import React from "react";
import "./Collection.css";
import Table from "react-bootstrap/Table";

const emg_data = [
  {
    value: "$67.6k",
    statement: "Income",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-primary dark:text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
  },
  {
    value: "12.6K",
    statement: "Completed",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-success"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        ></path>
      </svg>
    ),
  },
  {
    value: "143",
    statement: "Pending",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-warning"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
  },
  {
    value: "651",
    statement: "Dispatch",
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-info"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        ></path>
      </svg>
    ),
  },
];

function Collection() {
  return (
    <div>
      <div className="container">
        <div className="text">
          <h2>COLLECTION</h2>
        </div>
        <Table responsive>
          <thead>
            <tr className="t_head">
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24H Change</th>
              <th>24H Volume</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            <tr className="boxx">
              <td>1</td>
              <td>Mark</td>
              <td>23382.81</td>
              <td>-4.06%</td>
              <td>$43.43 B</td>
              <td>$572.34 B</td>
            </tr>
            <tr className="boxx">
              <td>2</td>
              <td>Jacob</td>
              <td>382.81</td>
              <td>3.06%</td>
              <td>$56.43 B</td>
              <td>$652.34 B</td>
            </tr>
            <tr className="boxx">
              <td>3</td>
              <td>Larry</td>
              <td>282.81</td>
              <td>2.89%</td>
              <td>$43.43 B</td>
              <td>$878.34 B</td>
            </tr>
            <tr className="boxx">
              <td>4</td>
              <td>Peter</td>
              <td>652.81</td>
              <td>7.89%</td>
              <td>$73.43 B</td>
              <td>$908.34 B</td>
            </tr>
          </tbody>
        </Table>
        
        <div className="row">
          <div className="mt-4 mb-5 grid grid-cols-2 gap-3 px-4 sm:mt-5 sm:grid-cols-4 sm:gap-5 sm:px-5 lg:mt-6">
            {emg_data.map((item, index, arr) => {
              return (
                <div className="rounded-lg bg-slate-100 p-4 dark:bg-navy-600">
                  <div className="flex justify-between space-x-1">
                    <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
                      {item.value}
                    </p>
                    {item.img}
                  </div>
                  <p className="mt-1 text-xs+">{item.statement}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
