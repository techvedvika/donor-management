import React, { useState } from "react";
import { useRouter } from 'next/router'

export default function Modal() {

  const router = useRouter()
  const routeChange = e => {
    e.preventDefault()
    router.push('/budget')
  }

  const [pgName, setPgName] = useState();
  const handleChange_3 = (e) => {
    if (e.target.name == 'pgName') {
      setPgName(e.target.value)
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { pgName }
    let res = await fetch('http://localhost:3000/api/selectBudget', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    console.log(res)
    let response = await res.json()
    console.log(response)
    setPgName("")
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="POST"
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
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"

              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
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
              onClick={routeChange}
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onSubmit={handleSubmit}
              >
                Save Another
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                name="submit"
                onSubmit={handleSubmit}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}