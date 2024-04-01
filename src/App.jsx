

import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputDiscriptionValue, setInputDiscriptionValue] = useState("");
  const [inputDataTime, setInputDataTime] = useState("");
  // inputs   =================================
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputDiscriptionChange = (e) => {
    setInputDiscriptionValue(e.target.value);
  };

  const handleInputDataTimeChange = (e) => {
    setInputDataTime(e.target.value);
  };


//New data =================================

const newData={
  id : Math.floor(Math.random() * 10000),
  title:inputValue,
  description:inputDiscriptionValue,
  date:inputDataTime
}


  //  setTodos New Data =================================
  const handleAddTodo = () => {
    if (inputValue.trim() !== '' &&  inputDiscriptionValue.trim() !== '' && inputDataTime.trim() !== '') {
      setTodos([...todos, newData]);
      setInputValue('');
      setInputDiscriptionValue('');
      setInputDataTime('');
    }else{
      alert('Please fill all the fields');
    }
  };

  //  Delete Data =================================

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id!== id));
  };

  

  // Toggle Menu =================================
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  
  //edit data  =================================

  const [editTitilInput, setEditInputTitil] = useState("");
  const [editDiscriptionInput, setEditInputDiscription] = useState("");
  const [editDataTimeInput, setEditInputDataTime] = useState("");

  const handEditInputTitil =(e) => {
     setEditInputTitil(e.target.value);
  };

  const handEditInputDiscription =(e) => {
     setEditInputDiscription(e.target.value);
  };

  const handEditInputDataTime =(e) => {
     setEditInputDataTime(e.target.value);
  };

  const handleEditTodo = (id , index) => {
    setEditInputTitil(todos.find((todo) => todo.id === id).title);
    setEditInputDiscription(todos.find((todo) => todo.id === id).description);
    setEditInputDataTime(todos.find((todo) => todo.id === id).date);

    localStorage.setItem('editTodoId', JSON.stringify(index))
  };

  const handleEditSubmit = () => {
    const idEditData = JSON.parse(localStorage.getItem("editTodoId"));
    todos[idEditData].title = editTitilInput;
    todos[idEditData].description = editDiscriptionInput;
    todos[idEditData].date = editDataTimeInput;
    
    setTodos(todos);
  }



  return (
    <div className="container mx-auto relative " >

      <div className="w-[800px] mx-auto p-10 border shadow-md mt-20">
        <h1 className="text-[36px] text-center text-green-500 font-semibold mb-3">Todo List</h1>
        <label htmlFor="titil">
          <p className="text-[20px] py-2 text-green-500 font-semibold">Title add</p>
          <input onChange={handleInputChange} value={inputValue} type="text" id="titil" className="w-[100%] py-2 px-5 outline-none border-2 rounded-md" placeholder=" title . . ." />
        </label>
        <label htmlFor="">
          <p className="text-[20px] py-2 text-green-500 font-semibold">Description add</p>
          <textarea onChange={handleInputDiscriptionChange} value={inputDiscriptionValue} className="w-[100%] py-2 px-5 h-[150px] outline-none border-2 rounded-md" placeholder=" Discripshin . . . . ."></textarea>
        </label>
        <label htmlFor="titil">
          <p className="text-[20px] py-2 text-green-500 font-semibold">Date time add</p>
          <input onChange={handleInputDataTimeChange} value={inputDataTime} type="datetime-local" id="titil" className="w-[50%] text-blue-950 text-[20px] py-2 px-5 outline-none border-2 rounded-md" />
        </label>
        <button onClick={handleAddTodo} className="bg-green-500 text-[20px] text-white py-[10px] ml-[50px]  px-7 rounded-md  "> <i className="bi bi-file-earmark-plus-fill mr-2"></i>add</button>
      </div>

      <ul className="w-[1000px] mx-auto  mt-20 mb-5 grid grid-cols-3 gap-6">
        {
          todos.length ? todos.map((el, index) => {
            return <>
              <li className="border shadow-md p-5 rounded-xl">
                <h4 className="text-[20px] py-2 text-[#434141] text-center font-bold">{el.title}</h4>
                <p className="text-[16px] h-[100px] py-2 text-[#434141] text-center font-semibold">
                  {el.description.length>150?el.description.slice(0,147)+" ...":el.description}
                </p>
                <p className="text-[18px] py-3 text-[#3c9e9e] text-center  font-bold">{el.date.slice(0,10) + " Time " + el.date.slice(11) }</p>
                <button onClick={ () => handleDeleteTodo(el.id)} className="bg-red-500 text-[20px] text-white py-[10px] mt-2  px-7 rounded-md "><i className="bi bi-trash3-fill text-white mr-2"></i>delete</button>
                <button onClick={ () => {
                  handleEditTodo(el.id , index); 
                  toggleMenu()
                  } } className="bg-orange-500 text-[20px] text-white py-[10px] mt-2  px-7 rounded-md ml-3"><i className="bi bi-pencil-square text-white mr-2"></i>edit</button>
              </li>
            </>
          }) : <h1 className="text-[45px] text-red-600 font-bold relative left-[350px]">NOT FOUND !!</h1>
        }
      </ul>

       {
        menu?<div className="flex items-center justify-center fixed top-0 let-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)]">
        <div className="w-[800px] mx-auto p-10 border shadow-md mt-20 bg-white rounded-2xl relative">
          <button onClick={()=>toggleMenu()} className="absolute py-2 px-3 top-3 right-4 hover:border hover:shadow-sm rounded-md duration-350 "><i class="bi bi-x-lg"></i></button>
          <h1 className="text-[36px] text-center text-green-500 font-semibold mb-3">Edit List</h1>
          <label htmlFor="titil">
            <p  className="text-[20px] py-2 text-green-500 font-semibold">Edit titil</p>
            <input value={editTitilInput} onChange={handEditInputTitil}   type="text" id="titil" className="w-[100%] py-2 px-5 outline-none border-2 rounded-md" placeholder=" title . . ." />
          </label>
          <label htmlFor="">
            <p className="text-[20px] py-2 text-green-500 font-semibold">Edit description </p>
            <textarea value={editDiscriptionInput}  onChange={handEditInputDiscription} className="w-[100%] py-2 px-5 h-[150px] outline-none border-2 rounded-md" placeholder=" Discripshin . . . . ."></textarea>
          </label>
          <label htmlFor="titil">
            <p className="text-[20px] py-2 text-green-500 font-semibold">Edit date time</p>
            <input value={editDataTimeInput} onChange={handEditInputDataTime}  type="datetime-local" id="titil" className="w-[50%] text-blue-950 text-[20px] py-2 px-5 outline-none border-2 rounded-md" />
          </label>
          <button onClick={()=>{
            toggleMenu()
            handleEditSubmit()      
          }} className="bg-green-500 text-[20px] text-white py-[10px] ml-[50px]  px-7 rounded-md  "> <i className="bi bi-check2-all mr-2"></i>save</button>
        </div>
        </div>:null
       }

    </div>
  );
};

export default App;

