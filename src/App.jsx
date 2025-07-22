import { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {

const name = useRef();
const email = useRef();
const age = useRef();
const img = useRef();
const form = useRef();

  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25, email: "alice@example.com", img: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com", img: "https://randomuser.me/api/portraits/men/2.jpg"},
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com", img: "https://randomuser.me/api/portraits/men/3.jpg"},
    { id: 4, name: "Diana", age: 28, email: "diana@example.com", img: "https://randomuser.me/api/portraits/women/4.jpg"},
    { id: 5, name: "Ethan", age: 27, email: "ethan@example.com", img: "https://randomuser.me/api/portraits/men/5.jpg"},
  ])

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id != id);
    setUsers(filteredUsers)
}

const handleSubmit = (e) => {
  e.preventDefault();

  const newName = name.current.value.trim();
  const newEmail = email.current.value.trim();
  const newAge = age.current.value.trim();
  const newImg = img.current.value.trim();

  if (!newName || !newEmail || !newAge || !newImg) {
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  setUsers((prev) => {
    return [
      ...prev,
      {
      name: name.current.value,
      email:email.current.value,
      age:age.current.value,
      img:img.current.value,
      id:uuidv4(),
      },
    ];
  });
      form.current.reset();
};

  return(
    <>
    <form ref={form} className="w-[300px]  mt-10 ml-10 bg-[#a8a8a84c] flex flex-col gap-4 p-3 rounded-3xl" onSubmit={handleSubmit} action="">
      <div >
        <label className="text-2xl text-white" htmlFor="">Name: </label>
        <br />
        <input className="border text-white pl-0.5 rounded text-xl ml-2" type="text" ref={name}/>
      </div>
      <div >
        <label className="text-2xl text-white" htmlFor="">Email: </label>
        <br />
        <input className="border text-white pl-0.5 rounded text-xl ml-2" type="email" ref={email}/>
      </div>
      <div >
        <label className="text-2xl text-white" htmlFor="">Age: </label>
        <br />
        <input className="border text-white pl-0.5 rounded text-xl ml-2" type="number" ref={age} />
      </div>
      <div >
        <label className="text-2xl text-white" htmlFor="">Avatar: </label>
        <br />
        <input className="border text-white pl-0.5 rounded text-xl ml-2" type="url" ref={img} />
      </div>
      <button className="text-xl text-white bg-[#a8a8a84c] w-30 h-10 rounded-2xl hover:bg-white hover:text-[#424242] hover:cursor-pointer ml-auto mr-auto">Add User</button>
    </form>

    <ul className="bg-[#7e7e7eac] w-[850px] flex flex-col gap-4 p-5 rounded-2xl mt-[-100px] ml-[600px]">
    {users.map((user) => {
      return (
        <li key={user.id} className="flex gap-10 items-center">
          <img className="w-12 h-12 rounded-[50%] " src={user.img} alt="" />
          <p className="text-2xl font-semibold text-white">{user.name}</p>
          <p className="ml-9 font-semibold text-white">email: <span className="italic">{ user.email}</span></p>
          <p className="ml-9 font-semibold text-white">age: <span className="font-bold text-xl"> {user.age}</span></p>
          <button className="ml-9 text-xl text-white bg-[#a8a8a84c] w-20 h-9 rounded-2xl  hover:bg-white hover:text-[#424242] hover:cursor-pointer" onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      )
    })}
    </ul>
    </>
  )
}


export default App
