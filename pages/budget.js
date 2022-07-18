import React, { useState, useEffect } from 'react'
import { Input } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// components
import Sidebar from './../components/Sidebar/Sidebar';
import FooterAdmin from "../components/Footers/FooterAdmin.js";

import mongoose from "mongoose";
import Funder from "../models/Funder";
import SelectBudget from "../models/SelectBudgetModels";
import { useRouter } from 'next/router'

const Budget = ({ datat, p }) => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };
  React.useEffect(() => {
    setIsRefreshing(false);
  }, [p]);

  const [showModal, setShowModal] = useState(false); //popup form

  const itm = datat; // Fetch Funder name
  const sp = p; // Fetch Funder name

  // const { ...funder } = bud;
  const [selectFunder, setSelectFunder] = useState();
  const [project, setProject] = useState();
  let [total_amt, setTotalAmt] = useState();
  // const [total_amt, setTotalAmt] = useState(sum);
  // const [selectProgram, setSelectProgram] = useState();
  // const [selectProgramItem, setSelectProgramItem] = useState();
  // const [item, setItem] = useState();
  // const [qty, setQty] = useState();
  // const [unit, setUnit] = useState();
  // const [rate, setRate] = useState();
  // const [amt, setAmt] = useState();
  // const [rem, setRem] = useState();
  // const { ...project } = bud;

  // add program in select 
  const [pgName, setPgName] = useState();
  const handleChange_3 = (e) => {
    if (e.target.name == 'pgName') {
      setPgName(e.target.value)
    }
  };

  // Purchasing Item
  const [purchasing, setpurchasing] = useState([
    { selectProgram: "", selectProgramItem: "", item: "", qty: "", unit: "", rate: "", amt: "", rem: "" },
  ]);
  // console.log(purchasing[0].amt)
  var sum = 0;
  for (let i = 0; i < purchasing.length; i++) {
    sum += parseInt(purchasing[i].amt);
  }
  // setTotalAmt = sum

  const handleChange = (i, e) => {
    let newFormValues = [...purchasing];
    newFormValues[i][e.target.name] = e.target.value;
    setpurchasing(newFormValues);
    if (e.target.value == 'Add More') {
      setShowModal(true)
    }
  };

  const handleChange_2 = (e) => {
    if (e.target.name == 'selectFunder') {
      setSelectFunder(e.target.value)
    }
    else if (e.target.name == 'project') {
      setProject(e.target.value)
    }
    else if (e.target.name == 'total_amt') {
      setProject(e.target.value)
    }
    else if (e.target.name == 'pgName') {
      setPgName(e.target.value)
    }
  };

  let addFormFields = () => {
    setpurchasing([...purchasing, { selectProgram: "", selectProgramItem: "", item: "", qty: "", unit: "", rate: "", amt: "", rem: "" }]);
  };
  let removeFormFields = (i) => {
    let newFormValues = [...purchasing];
    newFormValues.splice(i, 1);
    setpurchasing(newFormValues);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (showModal) {
      console.log("true")
      const SendData = { pgName }
      let res = await fetch('http://localhost:3000/api/selectBudget', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(SendData),
      })
      let response = await res.json()
      setPgName("")
      // if (res.status < 300) {
      //   refreshData();
      // }
    } else {
      console.log("not true")
      const data = { selectFunder, project, total_amt, purchasing }; //, activity, amount, remark, item, amt, rem
      let res = await fetch("http://localhost:3000/api/budgetApi", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();      
      setSelectFunder("");
      setProject("");
      setpurchasing([{ selectProgram: "", selectProgramItem: "", item: "", qty: "", unit: "", rate: "", amt: "", rem: "" }]);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 h-screen">
        <div className="py-4">
          <form
            onSubmit={handleSubmitForm}
            method="POST"
            className="container justify-center flex flex-col mx-auto mt-0 mb-5"
          ><h1 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-3">
              Generate Budget
            </h1>
            <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />

            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full md:w-1/2 px-1 mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

                >
                  Select Funder
                </label>
                <select
                  onChange={handleChange_2}
                  value={selectFunder}
                  id="selectFunder"
                  name="selectFunder"
                  className="form-control appearance-none block w-full bg-white text-gray-700 border focus:border-b-4 hover:border-purple-700 focus:border-purple-800 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                >
                  <option> Select... </option>
                  {itm.map((item) => {
                    return <option key={item.id}> {item.firstName} </option>;
                  })}
                </select>
              </div>
              <div className="w-full md:w-1/2 px-1 mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Project
                </label>
                <input
                  onChange={handleChange_2}
                  value={project}
                  className="form-control appearance-none block w-full bg-white text-gray-700 border focus:border-b-4  hover:border-purple-700 focus:border-purple-800 border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Project"
                  name="project"
                  id="project"
                />
              </div>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-gray-800 lg:text-xl md:mb-3">
              Program in Activity
            </h2>

            

            {/* popup form start */}
            {showModal ? (
              <>
                <div
                  // method="POST"
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Add Program
                        </h3>
                        <button
                        onClick={() => setIsRefreshing(true)}
                          className="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none"

                        >
                          <span className="text-black opacity-5 h-6 w-6 text-2xl block outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <div className="w-full px-1 mb-3 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                          >
                            Program Name
                          </label>
                          <input
                            onChange={handleChange_3}
                            value={pgName}
                            className="form-control appearance-none block w-full bg-white text-gray-700 border focus:border-b-4  hover:border-purple-700 focus:border-purple-800 border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                            type="text"
                            placeholder="Program Name"
                            name="pgName"
                            id="pgName"
                          />
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          onClick={() => setShowModal(false)}
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Close
                        </button>
                        <div className="md:w-2/3">
                          <button
                            onClick={handleSubmitForm}
                            className="shadow mt-3 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            name="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
            {/* popup form End */}

            {purchasing.map((element, index) => (
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full md:w-48  mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Select Program
                  </label>
                  <select
                    name="selectProgram" value={element.selectProgram || ""}
                    onChange={(e) => handleChange(index, e)} list="selectProgram" placeholder="Select Program" className="form-control appearance-none block w-full bg-white text-gray-700 border focus:border-b-4 hover:border-purple-700 focus:border-purple-800 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  >
                    {/* <option onClick={() => setShowModal(true)}>Add More</option> */}
                    <option> Select... </option>
                    {sp.map((item) => {
                      return <option key={item.id}> {item.pgName} </option>
                    })}
                    <option onClick={() => setShowModal(true)}>Add More</option>
                  </select>
                </div>
                <div className="w-full md:w-48 px-1 mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

                  >
                    Program Item
                  </label>
                  <select
                    name="selectProgramItem" value={element.selectProgramItem || ""}
                    onChange={(e) => handleChange(index, e)} list="selectProgramItem" placeholder="Program Item" className="form-control appearance-none block w-full bg-white text-gray-700 border focus:border-b-4 hover:border-purple-700 focus:border-purple-800 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  >
                    <option>a</option>
                    <option>b</option>
                    <option>c</option>
                    <option>d</option>
                  </select>
                  {/* {inputValue} */}
                </div>

                <div className="w-full md:w-36 px-1 mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state"
                  >
                    Item
                  </label>
                  <div className="relative">
                    <input
                      value={element.item || ""}
                      onChange={(e) => handleChange(index, e)}
                      className="form-control appearance-none block w-full bg-white text-gray-700 border focus:border-b-4  hover:border-purple-700 focus:border-purple-800 border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="item"
                      name="item"
                      type="text"
                      placeholder="Item"
                    />
                  </div>
                </div>
                <div className="w-full md:w-28 px-1 mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

                  >
                    Qty
                  </label>
                  <input
                    value={element.qty || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="form-control appearance-none block w-full bg-white text-gray-700 border focus:border-b-4  hover:border-purple-700 focus:border-purple-800 border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="qty"
                    name="qty"
                    type="Number"
                    placeholder="Qty"
                  />
                </div>
                <div className="w-full md:w-32 px-1 mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

                  >
                    Unit
                  </label>
                  {/* <input
                    value={element.unit || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="form-control appearance-none block w-full bg-white text-gray-700 border focus:border-b-4  hover:border-purple-700 focus:border-purple-800 border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="unit"
                    placeholder="Unit"
                    list="unit"
                  /> */}
                  <select
                    id="unit"
                    value={element.unit || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="form-control appearance-none block w-full bg-white text-gray-700 border focus:border-b-4  hover:border-purple-700 focus:border-purple-800 border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="unit"
                    placeholder="Unit"
                  >
                    <option>Nos</option>
                    <option>KG</option>
                    <option>Month</option>
                    <option>Day</option>
                  </select>
                </div>
                <div className="w-full md:w-32 px-1 mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

                  >
                    Rate
                  </label>
                  <input
                    value={element.rate || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="form-control appearance-none block w-full bg-white text-gray-700 border focus:border-b-4  hover:border-purple-700 focus:border-purple-800 border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="rate"
                    name="rate"
                    type="Number"
                    placeholder="Rate"
                  />
                </div>
                <div className="w-full md:w-36 px-1 mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

                  >
                    Amount
                  </label>
                  <input
                    value={element.amt = element.qty * element.rate || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="amt"
                    name="amt"
                    type="Number"
                    placeholder="Amount" disabled readOnly
                  />
                </div>
                <div className="w-full md:w-1/6 px-1 mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

                  >
                    Remark
                  </label>
                  <input
                    value={element.rem || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="form-control appearance-none block w-full bg-white text-gray-700 border focus:border-b-4  hover:border-purple-700 focus:border-purple-800 border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="rem"
                    name="rem"
                    type="text"
                    placeholder="Remark"
                  />
                </div>
                <div className="md:w-1/6 space-x-3">
                  {index ? (
                    <button
                      type="button"
                      className="button remove shadow mt-7 bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded"
                      onClick={() => removeFormFields(index)}
                    >
                      Remove
                    </button>
                  ) : null}
                  <button
                    onClick={() => addFormFields()}
                    className="shadow mt-7 bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded"
                    type="add"
                    name="add_item"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
         
            <input
              className="w-1/6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 cursor-not-allowed dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={total_amt = sum || ""}
              onChange={handleChange_2}
              id="total_amt"
              name="total_amt"
              type="Number"
              placeholder="Amount" disabled readOnly
            />

            <div className="md:w-2/3">
              <button
                onClick={handleSubmitForm}
                className="shadow mt-3 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                name="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <FooterAdmin />
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  // const request = await fetch('http://localhost:3000/api/getFunder')
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let data = await Funder.find();
  let pro = await SelectBudget.find();
  return {
    props: {
      datat: JSON.parse(JSON.stringify(data)),
      p: JSON.parse(JSON.stringify(pro))
    },// will be passed to the page component as props
  };
}



export default Budget