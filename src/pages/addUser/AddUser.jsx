import React, {useState } from "react";

const AddUser = () => {
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
 
    const newUser = {
      name,
      email,
      gender,
      status
    };
    console.log(newUser)

    // send data to the server
    fetch("http://localhost:5000/users2", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if(data.insertedId){
        //     Swal.fire({
        //         title: 'Success!',
        //         text: 'Coffee Added Successfully',
        //         icon: 'success',
        //         confirmButtonText: 'Cool'
        //       })
        // }
      });
  };
 
  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Add a user</h2>
        <form onSubmit={handleAddUser}>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <div className="flex gap-10">
                <label className="input-group">
                  <input type="radio" name="gender" value="Male" onChange={(e)=>{setGender(e.target.value)}}/>
                  <span className="input-label">Male</span>
                </label>
                <label className="input-group ">
                  <input type="radio" name="gender" value="Female" onChange={(e)=>{setGender(e.target.value)}}/>
                  <span className="input-label">Female</span>
                </label>
              </div>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <div className="flex gap-10">
                <label className="input-group">
                  <input type="radio" name="status" value="Active" onChange={(e)=>{setStatus(e.target.value)}}/>
                  <span className="input-label">Active</span>
                </label>
                <label className="input-group">
                  <input type="radio" name="status" value="Inactive" onChange={(e)=>{setStatus(e.target.value)}}/>
                  <span className="input-label">Inactive</span>
                </label>
              </div>
            </div>
          </div>

          <input type="submit" value="Add User" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
