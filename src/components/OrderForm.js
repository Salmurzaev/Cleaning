import React, { useState } from "react";
import axios from "axios";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function OrderForm() {
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const pattern = /^\996\d{9}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!phoneNumber || !phoneNumber.match(pattern)) {
      setPhoneNumberValid(false);
      setPhoneNumberValid(false);
    } else {
      setPhoneNumberValid(true);
      axios.post("http://localhost:3001/send-message", { phoneNumber, name });
      setPhoneNumberValid(true);
      setShowModal(false);
      setPhoneNumber("");
      setName("");
    }
  };

  return (
    <>
      <button
        className="hidden md:block border border-green-600 px-4 py-1 rounded-md text-green-600 hover:bg-green-700 hover:text-white"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Заказать звонок
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Форма связи</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="w-full max-w-xl ">
                    <form
                      className="flex items-center flex-col"
                      onSubmit={handleSubmit}
                    >
                      <div className="mb-6">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="name"
                        >
                          Имя
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          maxLength="20"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="phone"
                        >
                          Телефон
                        </label>
                        <ReactPhoneInput
                          inputClass={`shadow appearance-none border ${
                            phoneNumberValid ? "" : "border-red-500"
                          } rounded text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                          country={"kg"}
                          value={phoneNumber}
                          disableDropdown={true}
                          onChange={(value) => {
                            setPhoneNumber(value);
                            setPhoneNumberValid(value.match(pattern));
                          }}
                        />

                        {!phoneNumberValid && (
                          <p className="text-red-500 text-xs italic">
                            Неверный формат.
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Заказать
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
