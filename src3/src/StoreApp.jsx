import { useState, useEffect } from "react";

import { BsTrash3 } from "react-icons/bs";
// import { FiEdit } from "react-icons/fi";

export function StoreApp() {
    //Form Input STATES
    const [id, setId] = useState(null);
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState(null);

    // 1. Initialize state from LocalStorage ( or and empty array if )
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("products");
        if (data) {
            setProducts(JSON.parse(data));
        }
    }, []);

    const plist = products.map((p) => (
        <li key={p.id} className="fx mb1">
            <button onClick={() => handleDelete(p.id)} className="btn1 fyc bg30">
                <BsTrash3 />
            </button>
            {p.id} {p.category} {p.brand} {p.price}/-
        </li>
    ));

    //2. Add product to state and localStorage
    const handleAdd = (e) => {
        e.preventDefault();
        const newProduct = {
            id: id,
            category: category.trim(),
            brand : brand.trim(),
            price: price,
        };

        const updatedProducts = {...products, newProduct};
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));

        // Clear form fields
        setId("");
        setCategory("");
        setBrand("");
        setPrice("");
    };

    //3. Delete product using its array index (handles duplicate IDs safely)
    const handleDelete = (del_id) => {
        const updatedProducts = products.filter((product) => product.id !== del_id);
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    };

    return(
        <section className = "hf bg20 p3">
            <section className = "w25 b1 p1">
                <h3>Add Product</h3>
                <form onSubmit = {handleAdd} className="fy w15">
                    <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange ={(e) => setId(e.target.value)}
                    required
                />
                <input
                type ="text"
                placeholder="Category"
                value = {category}
                onChange={(e) => setCategory(e.target.value)}
                required
                />

                <input
                type="text"
                placeholder="Brand"
                value = {brand}
                onChange ={(e) => setBrand(e.target.value)}
                required
                />

                <input
                type="text"
                placeholder="Price"
                value = {price}
                onChange ={(e) => setPrice(e.target.value)}
                required
                />

                <button type="submit" className ="btn2 bg40 mt1">
                    Add
                </button>
                </form>
            </section>
            <br />
            <section className="w25 b1 p1">
                <h3>List of Products ({products.length})</h3>
                <br  />
                <ul style = {{ paddingLeft: "0", listStyleType: "none"}}>{plist}</ul>
            </section>
        </section>
    );
}