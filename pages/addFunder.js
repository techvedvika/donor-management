import React from 'react'
import Link from "next/link";
// components
import Sidebar from './../components/Sidebar/Sidebar';
import FooterAdmin from "../components/Footers/FooterAdmin.js";

import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// layout for page

const AddFunder = () => {

  const [funderId, setfunderId] = useState()
  const [funderType, setFunderType] = useState()
  const [firstName, setfirstName] = useState()
  const [middleName, setmiddleName] = useState()
  const [lastName, setlastName] = useState()
  const [funderCategory, setfunderCategory] = useState()
  const [addressLine1, setaddressLine1] = useState()
  const [addressLine2, setaddressLine2] = useState()
  const [city, setcity] = useState()
  const [state, setstate] = useState()
  const [country, setcountry] = useState()
  const [pin, setpin] = useState()
  const [nationality, setnationality] = useState()
  const [contactPerson, setcontactPerson] = useState()
  const [contactNo, setcontactNo] = useState()
  const [email, setemail] = useState()
  const [website, setwebsite] = useState()

  const handleChange = (e) => {
    if (e.target.name == 'funderId') {
      setfunderId(e.target.value)
    }
    else if (e.target.name == 'funderType') {
      setFunderType(e.target.value)
    }
    else if (e.target.name == 'firstName') {
      setfirstName(e.target.value)
    }
    else if (e.target.name == 'middleName') {
      setmiddleName(e.target.value)
    }
    else if (e.target.name == 'lastName') {
      setlastName(e.target.value)
    }
    else if (e.target.name == 'funderCategory') {
      setfunderCategory(e.target.value)
    }
    else if (e.target.name == 'addressLine1') {
      setaddressLine1(e.target.value)
    }
    else if (e.target.name == 'addressLine2') {
      setaddressLine2(e.target.value)
    }
    else if (e.target.name == 'city') {
      setcity(e.target.value)
    }
    else if (e.target.name == 'state') {
      setstate(e.target.value)
    }
    else if (e.target.name == 'country') {
      setcountry(e.target.value)
    }
    else if (e.target.name == 'pin') {
      setpin(e.target.value)
    }
    else if (e.target.name == 'nationality') {
      setnationality(e.target.value)
    }
    else if (e.target.name == 'contactPerson') {
      setcontactPerson(e.target.value)
    }
    else if (e.target.name == 'contactNo') {
      setcontactNo(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'website') {
      setwebsite(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { funderId, funderType, firstName, middleName, lastName, funderCategory, addressLine1, addressLine2, city, state, country, pin, nationality, contactPerson, contactNo, email, website }
    let res = await fetch('http://localhost:3000/api/funder', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response)

    setfunderId('')
    setFunderType('')
    setfirstName('')
    setmiddleName('')
    setlastName('')
    setfunderCategory('')
    setaddressLine1('')
    setaddressLine2('')
    setcity('')
    setstate('')
    setcountry('')
    setpin('')
    setnationality('')
    setcontactPerson('')
    setcontactNo('')
    setemail('')
    setwebsite('')
  }
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-white h-screen">
        <div className="px-4 md:px-10 mx-auto w-full">
          <form method='POST' className="container justify-center p-5 flex flex-col mx-auto mt-0 mb-5 ">

            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-5">Add Funder Details</h2>

            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="funderId" onChange={handleChange} value={funderId} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' required />
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Funder Id</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <select type="text" name="funderType" id="selectProject" onChange={handleChange} value={funderType} className="select block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' required>
                  <option selected disabled >-- Select --</option>
                  <option>CSR</option>
                  <option>Foundation</option>
                  <option>Individual</option>
                  <option>Corporate Donation</option>
                </select>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Funder Type</label>
              </div>
            </div>

            <div className="grid xl:grid-cols-3 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                  <input onChange={handleChange} value={firstName} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="firstName" name="firstName" type="text" placeholder=' '/>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" htmlFor="grid-state">
                First Name
                </label>                
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input onChange={handleChange} value={middleName} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="middleName" name="middleName" type="text" placeholder=' '/>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" htmlFor="grid-zip">
                Middle Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input onChange={handleChange} value={lastName} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="lastName" name="lastName" type="text" placeholder=' '/>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" htmlFor="grid-zip">
                Last Name
                </label>
              </div>
            </div>

            <div className="grid xl:grid-cols-3 xl:gap-6">
              <div div className="relative z-0 w-full mb-6 group">
                <select onChange={handleChange} value={funderCategory} id="funderCategory" name="funderCategory" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' '>
                <option selected disabled >-- Select --</option>
                  <option>Domestic</option>
                  <option>FCRA</option>
                </select>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" htmlFor="grid-zip">
                  Funder Category
                </label>
              </div>
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-6">              
              <div className="relative z-0 w-full mb-6 group">
                <input onChange={handleChange} value={addressLine1} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="addressLine1" name="addressLine1" type="text" placeholder=' '/>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">
                Address Line 1
                </label>
              </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input onChange={handleChange} value={addressLine2} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="addressline2" name="addressline2" type="text" placeholder=' '/>
                  <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">
                    Address Line 2
                  </label>
                </div>
            </div>

            <div className="grid xl:grid-cols-3 xl:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="city" onChange={handleChange} value={city} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' required />

                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">City</label>
              </div>
              <div className="relative z-0 w-full mb-6 groupwh">
                <input type="text" name="state" onChange={handleChange} value={state} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' '  required />
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">
                  State
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 groupwh">
                <input type="text" name="country" onChange={handleChange} value={country} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' required />
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">
                  Country
                </label>
              </div>
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 w-full mb-6 groupwh">
                  <input onChange={handleChange} value={pin} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="pin" name="pin" type="number" placeholder=' '/>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" htmlFor="grid-state">
                PIN Code
                </label>
                
              </div>
              <div className="relative z-0 w-full mb-6 groupwh">
                <input onChange={handleChange} value={nationality} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="nationality" name="nationality" type="text"  placeholder=' '/>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" htmlFor="grid-zip">
                Nationality
                </label>
              </div>
            </div>

            <div className="grid xl:grid-cols-4 xl:gap-6">
              <div className="relative z-0 w-full mb-6 groupwh">
                  <input onChange={handleChange} value={contactPerson} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="contactPerson" name="contactPerson" type="text"  placeholder=' '/>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" htmlFor="grid-state">
                Contact Person
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 groupwh">
                <input onChange={handleChange} value={contactNo} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="contactNo" name="contactNo" type="number" placeholder=' '/>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" htmlFor="grid-zip">
                Contact No
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 groupwh">                
                  <input onChange={handleChange} value={email} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="email" name="email" type="email" placeholder=' '/>
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" htmlFor="grid-state">
                Email
                </label>
                
              </div>
              <div className="relative z-0 w-full mb-6 groupwh">
                <input onChange={handleChange} value={website} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="website" name="website" type="text" placeholder=' ' />
                <label className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-3" htmlFor="grid-zip">
                  website
                </label>
              </div>
            </div>

            <div className="md:w-2/3 space-x-5">
              <button onClick={handleSubmit} className="shadow mt-3 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" name="submit">
                Submit
              </button>

              <Link href="/funderList">
                <button className="shadow mt-3 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                  Back
                </button>
              </Link>

            </div>
          </form>
        </div>
        <FooterAdmin />
      </div>
    </>
  )
}

export default AddFunder
