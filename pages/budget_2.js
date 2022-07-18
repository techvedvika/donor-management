import React, { useState }  from 'react'
import Sidebar from './../components/Sidebar/Sidebar';
import FooterAdmin from "../components/Footers/FooterAdmin.js";

import mongoose from "mongoose";
import Funder from "../models/Funder";
import SelectBudget from "../models/SelectBudgetModels";

function Budget_2({ datat, p }) {

  const itm = datat; // Fetch Funder name
  const sp = p; // Fetch program name

  const [selectFunder, setSelectFunder] = useState();
  const [project, setProject] = useState();
  const [total_amt, setTotalAmt] = useState();
  // const [selectProgram, setSelectProgram] = useState();
  // const [selectProgramItem, setSelectProgramItem] = useState();
  // const [item, setItem] = useState();
  // const [qty, setQty] = useState();
  // const [unit, setUnit] = useState();
  // const [rate, setRate] = useState();
  // const [amt, setAmt] = useState();
  // const [remark, setRemark] = useState();
  const [showModal, setShowModal] = useState(false); //popup form


  const [state, setState] = useState([{ selectProgram: "", selectProgramItem: "", item: "", qty: "", unit: "", rate: "", amt: "", remark: "" }]);
  const handleChange = e => {
      const { name, value } = e.target;
      setState(prevState => ([{
          ...prevState,
          [name]: value
      }]));
  };

  const totalAmt = state
  console.log(totalAmt)

  let addFormFields = () => {
    setState([...state, { selectProgram: "", selectProgramItem: "", item: "", qty: "", unit: "", rate: "", amt: "", remark: "" }]);
  };
  let removeFormFields = (i) => {
    let newFormValues = [...state];
    newFormValues.splice(i, 1);
    setState(newFormValues);
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
      const data = { selectFunder, project, total_amt, state }; //, activity, amount, remark, item, amt, rem
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
      setState([{ selectProgram: "", selectProgramItem: "", item: "", qty: "", unit: "", rate: "", amt: "", rem: "" }]);
    }
  };


  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 h-screen">
        <div className="px-4">
          <form
            onSubmit={handleSubmitForm}
            method="POST"
            className="container justify-center p-5 flex flex-col mx-auto mt-0 mb-5"
          >
            <h1 className="mb-10 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-12 md:mt-12">
            Generate Budget
            </h1>

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

            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
              <select type="text" name="selectFunder" id="selectFunder" onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                  <option selected disabled >-- Select --</option>
                  {itm.map((item) => {
                    return <option key={item.id}> {item.firstName} </option>;
                  })}
                </select>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Select Funder</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="project" onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label  className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Project</label>
              </div>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-gray-800 lg:text-xl md:mb-3">
              Program in Activity
            </h2>

            {state.map((element, index) => (
              <div className="flex grid -mx-3 mb-3">
            <div className="grid xl:grid-cols-3 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <select type="text" name="selectProgram" id="selectProgram" value={state.selectProgram} onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                <option selected disabled>-- Select --</option>
                  {sp.map((item) => {
                      return <option key={item.id}> {item.pgName} </option>
                    })}
                    <option onClick={() => setShowModal(true)}>Add More</option>
                </select>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Select Program</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
              <select type="text" name="selectProgramItem" id="selectProgramItem" value={state.selectProgramItem} onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                  <option selected disabled >-- Select --</option>
                </select>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Program Item</label>
              </div>
            </div>

            <div className="grid xl:grid-cols-8 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="item" id="item" value={state.item} onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Item</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="number" name="qty" id="qty" value={state.qty} onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Qty</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
              <select type="text" name="unit" id="unit" value={state.unit} onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                  <option selected disabled >-- Select --</option>
                  <option>Nos</option>
                    <option>KG</option>
                    <option>Month</option>
                    <option>Day</option>
                </select>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Unit</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="number" name="rate" id="rate" value={state.rate} onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Rate</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="number" name="amt" id="amt" value={state.amt} onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Amount</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="remark" id="remark" value={state.remark} onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Remark</label>
              </div>

              <div className="space-x-3">
                  {index ? (
                    <button
                      type="button"
                      className="button remove shadow mt-2 bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded"
                      onClick={() => removeFormFields(index)}
                    >
                      Remove
                    </button>
                  ) : null}
                  <button
                    onClick={() => addFormFields()}
                    className="shadow mt-2 bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded"
                    type="add"
                    name="add_item"
                  >
                    Add
                  </button>
                </div>
            </div>
            <div className="py-4">
    <div className="w-full border-t border-gray-300"></div>
</div>
            </div>
            ))}


            <div className="md:w-2/3">
              <button className="shadow mt-3 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" name="submit" onClick={handleSubmitForm}>
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
    mongoose.connect(process.env.MONGO_URI);
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

export default Budget_2
