import { Outlet } from "react-router-dom";

function CheckoutPage() {
    return (
        <>
            <header>
                <div className="logo p-0 align-middle h-8">
                    <h1 className="header-title text-3xl">FilmsLand</h1>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Copyright, 2023</p>
            </footer>
        </>
    );
}

export default CheckoutPage;
