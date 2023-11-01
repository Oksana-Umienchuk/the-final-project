
function Header() {
    return (
        <>
            <header className="header container m-auto py-1 border-b flex justify-between items-center">
                <div className="logo p-0 align-middle">
                    FilmsLand
                </div>
                <nav className="menu flex gap-5 justify-center">
                    <a href="/">Home</a>
                    <a href="/">Films</a>
                    <a href="/">Popular Films</a>
                </nav>
            </header>
        </>
    );
}

export default Header;
