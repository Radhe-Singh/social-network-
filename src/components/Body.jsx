const Body=()=>{
    return(
        <div className="h-[100vh] bg-black flex justify-center items-center">
            <div className="h-[500px] w-[440px] bg-slate-600 rounded-3xl">
                <img src="https://pedrorcastro.github.io/Jessica-Randall---Front-end-Developer/avatar-jessica.jpeg" alt="" className="h-[100px] w-[100px] block m-[auto] mt-2 rounded-[50%]"/>
                <h1 className="text-center text-white text-3xl mt-3">Jessica Randall<span className="mt-2 text-yellow-300 block text-xl">london,kingdom</span></h1>
                <p className="text-xl text-center text-white mt-2">"Front-end Developer and avid reader"</p>
                <ul className="text-white font-mono none text-2xl text-center ml-[50px] mr-[50px] hover:cursor-pointer">
                    <li className=" bg-slate-700 mt-2 p-1 rounded-xl  hover:bg-yellow-300  hover:text-blue-900" ><button>Github</button></li>
                    <li className=" bg-slate-700 mt-2 p-1 rounded-xl  hover:bg-yellow-300  hover:text-blue-900"><button>Fronted mentor</button></li>
                    <li className=" bg-slate-700 mt-2 p-1 rounded-xl  hover:bg-yellow-300  hover:text-blue-900"><button>LinkedIn</button></li>
                    <li className=" bg-slate-700 mt-2 p-1 rounded-xl  hover:bg-yellow-300  hover:text-blue-900"><button>Twitter</button></li>
                    <li className=" bg-slate-700 mt-2 p-1 rounded-xl hover:bg-yellow-300  hover:text-blue-900 "><button>Instagram</button></li>
                </ul>
            

            </div>

        </div>
    )
}
export default Body;