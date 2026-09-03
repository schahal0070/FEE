import React, {useEffect,useState} from "react";

function ShowList(props) 
{
    const [products,setProducts]=useState([]);

    useEffect(() => 
    {
        let data = localStorage.getItem("products");
        data=JSON.parse(data);
        setProducts(data);
        if(props.brand) 
        {
            setProducts(data.filter((item)=>item.brand === props.brand));
        }
    }, []); // dependency array ie empty array

    return (
        <section className="fyc">
            <div className="b1" style={{padding: "1rem"}}>
                <h3>Product list {props.brand}</h3>
                <div className="bg1">
                    <span style={{width:"3rem"}}>ID</span>
                    <span style={{width:"7rem"}}>Brand</span>
                    <span style={{width:"7rem"}}>Price</span>
                </div>
                {products.map((item)=>(
                    <div key={item.ID}>
                        <span style={{width:"3rem"}}>{item.id}</span>
                        <span style={{width:"3rem"}}>{item.brand}</span>
                        <span style={{width:"3rem"}}>{item.price}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default ShowList;