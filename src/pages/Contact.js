function Contact() {
  return (
    <>
      <h1 className=" text-2xl font-bold text-center my-4 font-sans">
        Contact
      </h1>
      <div className="border border-gray-100  w-4/12 m-auto ">
        <div className="p-8 flex flex-col items-center">
          <label className="py-4">
            Name : <input className="border border-gray-200 "></input>
          </label>
          <label placeholder="email" className="py-4">
            email :{"  "}
            <input
              type="email"
              required
              className="border border-gray-200 "
            ></input>
          </label>
          <label>
            message : <textarea className="border border-gray-200"></textarea>
          </label>
          <button className=" my-4 cursor-pointer bg-gray-200 w-fit p-2 text-sm m-auto rounded">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
