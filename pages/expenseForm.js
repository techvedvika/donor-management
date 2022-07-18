import React, { useState } from 'react'
// components
import Sidebar from './../components/Sidebar/Sidebar';
import FooterAdmin from "../components/Footers/FooterAdmin.js";
import mongoose from "mongoose";
import budget from "../models/BudgetModels";


const ExpenseForm = ({ expHead, proName, expBy, Sproject }) => {

  //props
  const exphead = expHead;
  const proname = proName;
  const expby = expBy;
  const project = Sproject;
  console.log(project)


  const [selectProject, setSelectProject] = useState()
  const [pro, setPro] = useState()
  const [showAmt, setShowAmt] = useState()
  const [VendorName, setVendorNamet] = useState()
  const [InvoiceNo, setInvoiceNo] = useState()
  const [DateOfInvoice, setDateOfInvoice] = useState()
  const [InvoiceAmount, setInvoiceAmount] = useState()
  const [ExpenseDec, setExpenseDec] = useState()
  const [expenseHead, setexpenseHead] = useState()
  const [programmeName, setprogrammeName] = useState()
  const [expenseBy, setexpenseBy] = useState()
  const [uploadImage, setuploadImage] = useState()
  const [typeOfPayment, settypeOfPayment] = useState()
  const [dateOfPayment, setdateOfPayment] = useState()
  const [paidBy, setpaidBy] = useState()
  const [paidAmount, setpaidAmount] = useState()
  const [modeOfPayment, setmodeOfPayment] = useState()
  const [expenses, setExpenses] = useState([{ VendorName: "", InvoiceNo: "", DateOfInvoice: "", InvoiceAmount: "", ExpenseDec: "", expenseHead: "", programmeName: "", expenseBy: "", uploadImage: "", typeOfPayment: "", dateOfPayment: "", paidBy: "", paidAmount: "", modeOfPayment: "" }])

  // function logValue() {
  //   console.log(selectProject)
  // }

  const handleChange = (e) => {
    if (e.target.name == 'selectProject') {
      setSelectProject(e.target.value);
      setPro(e.target.key);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { selectProject, pro, VendorName, InvoiceNo, DateOfInvoice, InvoiceAmount, ExpenseDec, expenseHead, programmeName, expenseBy, uploadImage, typeOfPayment, dateOfPayment, paidBy, paidAmount, modeOfPayment }
    let res = await fetch('http://localhost:3000/api/expenses', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response)

    setExpenses('')
  }

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 h-screen">
        <div className="px-4">
          <form
            // onSubmit={handleSubmitForm}
            method="POST"
            className="container justify-center p-5 flex flex-col mx-auto mt-0 mb-5"
          >
            <h1 className="mb-10 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-12 md:mt-12">
              Expense
            </h1>

            <div className="grid xl:grid-cols-4 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <select type="text" name="selectProject" id="selectProject" value={selectProject} onChange={handleChange} className="select block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                  <option selected disabled >-- Select --</option>
                  {[project].map((item) => {
                    return <option value={item.total_amt}> {item.project} </option>;
                  })}
                </select>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Select Project</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="VendorName" value={VendorName} onChange={(e) => { setVendorNamet(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Vendor name</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="InvoiceNo" value={InvoiceNo} onChange={(e) => { setInvoiceNo(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Invoice No</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="Date" name="DateOfInvoice" value={DateOfInvoice} onChange={(e) => { setDateOfInvoice(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Date of Invoice</label>
              </div>
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="Number" name="InvoiceAmount" id="InvoiceAmount" value={InvoiceAmount} onChange={(e) => { setInvoiceAmount(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Invoice Amount</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="ExpenseDec" id="ExpenseDec" value={ExpenseDec} onChange={(e) => { setExpenseDec(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Expense Description</label>
              </div>
            </div>

            <div className="grid xl:grid-cols-3 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <select type="text" name="programmeName" id="programmeName" value={programmeName} onChange={(e) => { setprogrammeName(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                  <option selected disabled >-- Select --</option>
                  {exphead.map((item) => {
                    return <option>{item.selectProgram}</option>
                  })}
                </select>

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Programme Name</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <select type="text" name="expenseHead" id="expenseHead" value={expenseHead} onChange={(e) => { setexpenseHead(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required >
                  <option selected disabled >-- Select --</option>
                  {/* <option>{items}</option> */}
                  {exphead.map((item) => {
                    return <option >{item.item}</option>
                  })}
                </select>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Expense Head</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <select type="text" name="expenseBy" id="expenseBy" value={expenseBy} onChange={(e) => { setexpenseBy(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                  <option selected disabled >-- Select --</option>
                  {expby.map((item) => {
                    return <option key={item.office}>{item.first_name}</option>
                  })}
                </select>

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Expense By</label>
              </div>
            </div>


            <div className="grid xl:grid-cols-3 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="totalAmount" id="totalAmount" value={selectProject} onChange={(e) => { setShowAmt(e.target.value) }} className="px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer cursor-not-allowed" placeholder=" " required readOnly disabled />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Show Amount</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="availableBalance" id="availableBalance" className="px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer cursor-not-allowed" placeholder=" " required readOnly disabled />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Show Available Balance</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input type="file" name="uploadImage" id="uploadImage" value={uploadImage} onChange={(e) => { setuploadImage(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required multiple />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Upload Images</label>
              </div>
            </div>

            <div className="grid xl:grid-cols-5 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="typeOfPayment" id="typeOfPayment" value={typeOfPayment} onChange={(e) => { settypeOfPayment(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Type of Payment</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="date" name="dateOfPayment" id="dateOfPayment" value={dateOfPayment} onChange={(e) => { setdateOfPayment(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Date of Payment</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="paidBy" id="paidBy" value={paidBy} onChange={(e) => { setpaidBy(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Paid By</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="number" name="paidAmount" id="paidAmount" value={paidAmount} onChange={(e) => { setpaidAmount(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Paid Amount</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="modeOfPayment" id="modeOfPayment" value={modeOfPayment} onChange={(e) => { setmodeOfPayment(e.target.value) }} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Mode of Payment</label>
              </div>
            </div>

            <div className="md:w-2/3">
              <button onClick={handleSubmit} className="shadow mt-3 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" name="submit">
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

// This gets called on every request
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  // Expense Head item
  let data = await budget.find();
  let datas = []
  for (let i = 0; i < data.length; i++) {
    datas = data[i]
  }
  console.log(datas)
  let expHead = JSON.parse(JSON.stringify(datas.purchasing))
  let Sproject = JSON.parse(JSON.stringify(datas))
  // console.log(Sproject)

  //program Name
  const programName = await fetch(`https://new.advanceexcel.in/admin/17000ft_apis/programme_master`)
  const proName = await programName.json()

  //expense By
  const expenseBy = await fetch(`https://new.advanceexcel.in/admin/17000ft_apis/office`)
  const expBy = await expenseBy.json()

  // Pass data to the page via props
  return {
    props: {
      Sproject,
      expHead,
      proName,
      expBy
    }
  }
}

export default ExpenseForm