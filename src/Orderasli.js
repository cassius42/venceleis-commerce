import AnimationRevealPage from "helpers/AnimationRevealPage";
import React, { useState } from "react";
import Header from "../components/headers/light";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import { toast } from "react-toastify";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Order = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "Pilih Metode Pembayaran",
  });

  const handleChangeData = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);

  const handleNextPage = () => {
    switch (currentStep) {
      case 1:
        if (form.address && form.city && form.postalCode && form.country) {
          setCurrentStep((thisPage) => thisPage + 1);
        } else {
          toast.error(`Tolong isi semua data`, {
            position: "top-center",
            closeOnClick: true,
          });
        }
        break;

      case 2:
        if (form.paymentMethod === "Pilih Metode Pembayaran") {
          toast.error(`Silahkan pilih metode pembayaran terlebih dahulu`, {
            position: "top-center",
            closeOnClick: true,
          });
        } else {
          setCurrentStep((thisPage) => thisPage + 1);
        }
        break;
      default:
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep((thisPage) => thisPage - 1);
  };

  return (
    <>
      <Header />
      {currentStep === 1 && (
        <AnimationRevealPage>
          <div className="form-container flex flex-row justify-center w-full p-6 mt-4 border-2 rounded-2xl bg-white">
            <form className="w-full">
              <h1 className="title text-center mb-4 text-3xl font-bold">
                Delivery Address
              </h1>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 ">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="address"
                    name="address"
                    type="text"
                    onChange={handleChangeData}
                    value={form.address}
                    placeholder="Alamat Tempat Tinggal"
                  />
                  {/* <p className="text-red-500 text-xs italic">*Wajib diisi</p> */}
                </div>

                <div className="w-full px-3 mb-2">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    City
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="city"
                    name="city"
                    type="text"
                    onChange={handleChangeData}
                    value={form.city}
                    placeholder="Kota Tempat Tinggal"
                  />
                  {/* <p className="text-red-500 text-xs italic">*Wajib diisi</p> */}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Postal Code
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="postalCode"
                    name="postalCode"
                    type="number"
                    onChange={handleChangeData}
                    value={form.postalCode}
                    placeholder="Kode Pos"
                  />
                  {/* <p className="text-red-500 text-xs italic">*Wajib diisi</p> */}
                </div>
                <div className="w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Country
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="country"
                    name="country"
                    type="text"
                    onChange={handleChangeData}
                    value={form.country}
                    placeholder="Negara Tempat Tinggal"
                  />
                  {/* <p className="text-red-500 text-xs italic">*Wajib diisi</p> */}
                </div>
              </div>
              <div className="flex items-center justify-end mr-0">
                <button
                  type="button"
                  className="inline-block align-baseline font-bold text-sm py-4 px-10 rounded-md bg-violet-700 text-black hover:text-white hover:bg-violet-800"
                  onClick={handleNextPage}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </AnimationRevealPage>
      )}

      {currentStep === 2 && (
        <AnimationRevealPage>
          <div className="form-container flex flex-row justify-center w-full p-6 mt-4 border-2 rounded-2xl bg-white">
            <form className="w-full">
              <h1 className="title text-center mb-4 text-3xl font-bold">
                Payment Method
              </h1>

              <div class="inline-block relative w-full">
                <select
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChangeData}
                  name="paymentMethod"
                  value={form.paymentMethod}
                >
                  <option className="text-gray-500">
                    Pilih Metode Pembayaran
                  </option>
                  <option>BCA</option>
                  <option>Mandiri</option>
                </select>
              </div>

              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  className="inline-block align-baseline font-bold text-sm py-4 px-10 rounded-md bg-gray-500 text-black hover:text-white hover:bg-gray-800"
                  onClick={handlePreviousStep}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="inline-block align-baseline font-bold text-sm py-4 px-10 rounded-md bg-violet-700 text-black hover:text-white hover:bg-violet-800"
                  onClick={handleNextPage}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </AnimationRevealPage>
      )}

      {currentStep === 3 && (
        <AnimationRevealPage>
          <div className="form-container flex flex-row justify-center w-full p-6 mt-4 border-2 rounded-2xl bg-white">
            <div className="bio-container flex justify-center w-full">
              <div className="form-info flex gap-72">
                <div className="customer flex">
                  <div className="reactjs-icon flex items-center text-4xl mr-4">
                    <FaUser />
                  </div>
                  <div>
                    <h5 className="font-bold">Customer</h5>
                  </div>
                </div>

                <div className="order-info flex">
                  <div className="reactjs-icon flex items-center text-4xl mr-4">
                    <TbTruckDelivery />
                  </div>
                  <div>
                    <h5 className="font-bold">Order Info</h5>
                    <p>Shipping: {form.country}</p>
                    <p>Payment Method: {form.paymentMethod}</p>
                  </div>
                </div>

                <div className="deliver-to flex">
                  <div className="reactjs-icon flex items-center text-4xl mr-4">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h5 className="font-bold">Deliver To</h5>
                    <p>Address: {form.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="button-container flex flex-row justify-center w-full p-6 mt-4 border-2 rounded-2xl bg-white">
            <div className="bio-container flex justify-center w-full">
              <div className="form-info flex gap-72">
                <div className="customer flex">
                  <div className="reactjs-icon flex items-center text-4xl mr-4">
                    <FaUser />
                  </div>
                  <div>
                    <h5 className="font-bold">Customer</h5>
                  </div>
                </div>

                <div className="order-info flex">
                  <div className="reactjs-icon flex items-center text-4xl mr-4">
                    <TbTruckDelivery />
                  </div>
                  <div>
                    <h5 className="font-bold">Order Info</h5>
                    <p>Shipping: {form.country}</p>
                    <p>Payment Method: {form.paymentMethod}</p>
                  </div>
                </div>

                <div className="deliver-to flex">
                  <div className="reactjs-icon flex items-center text-4xl mr-4">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h5 className="font-bold">Deliver To</h5>
                    <p>Address: {form.address}</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="flex items-center justify-between mt-8">
              <button
                type="button"
                className="inline-block align-baseline font-bold text-sm py-4 px-10 rounded-md bg-gray-500 text-black hover:text-white hover:bg-gray-800"
                onClick={handlePreviousStep}
              >
                Back
              </button>
              <button
                type="button"
                className="inline-block align-baseline font-bold text-sm py-4 px-10 rounded-md bg-violet-700 text-black hover:text-white hover:bg-violet-800"
                onClick={handleNextPage}
              >
                Next
              </button>
            </div>
          </div>
        </AnimationRevealPage>
      )}
      <Footer background={"bg-gray-200"} />
    </>
  );
};

export default Order;
