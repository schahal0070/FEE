import { Link, Outlet } from "react-router-dom";

export function Products() {
    return (
        <div className="h95 fx">
            <aside className="w10 p2 fy ">
                <Link to=".">Product-1</Link>
                <Link to="product2">Product-2</Link>
                <Link to="product3">Product-3</Link>
            </aside>
            <main className="w100 p2 bg10" style={{ opacity: "0.8" }}>
                <Outlet />
            </main>
        </div>
    );
}