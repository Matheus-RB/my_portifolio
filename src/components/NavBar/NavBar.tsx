const NavBar = () => {
    return (
        <header className="p-10 absolute top-0 w-full">
            <nav className="flex justify-center">
                <ul className="flex gap-4 sm:gap-10 md:gap-28 text-white text-xs md:text-base">
                    <li className="hover:text-blue-400"><a href="#home">INICIAL</a></li>
                    <li className="hover:text-blue-400"><a href="#projects">PROJETOS</a></li>
                    <li className="hover:text-blue-400"><a href="#about">SOBRE</a></li>
                    <li className="hover:text-blue-400"><a href="#certificates">CERTIFICADOS</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar