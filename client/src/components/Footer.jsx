
const Footer = () => {
    return (
        <div className="w-full h-[18vh] flex items-start justify-center">
            <div className="flex-1 h-full flex items-center justify-center flex-col">          
                <img className="w-[8rem] h-auto mb-[2rem]" src="./imgs/full-logo.png" alt="logo" />
                <div className="w-3/4 md:w-[30%] h-auto flex items-center justify-between">
                    <img className="w-[2rem] h-auto cursor-pointer hover:bg-blue-400 rounded-md" src="./imgs/1.png" alt="icon" />
                    <img className="w-[2rem] h-auto rounded-md cursor-pointer hover:bg-blue-400" src="./imgs/2.svg" alt="icon" />
                    <img className="w-[2rem] h-auto rounded-md cursor-pointer hover:bg-blue-400" src="./imgs/3.svg" alt="icon" />
                </div>
            </div>
            <div className="flex-1 h-full flex items-center justify-center">          
                <h3 className="text-[1.2rem] font-light">Copyright &copy; 2023 Finance</h3>
            </div>
        </div>
    )
}

export default Footer
