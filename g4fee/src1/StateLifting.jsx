import { useState } from "react";
import { Child1 } from "./components/Child1";
import { Child2 } from "./components/Child2";

export function StateLifting() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((p) => p+1);
    }

    return (
        <div className="hf p2 bg50" >
            <p className="mb2">
                Demonstration of <h3>State Lifting and State Sharing</h3>
            </p>

            <div className="b1 p2 w50 ">
                <div className="fx jsb">
                    <div>Parent Component</div> 
                    <div>
                        <button className="btn2" onClick={handleClick}>
                            Counter
                        </button>
                        <span className="p2 sp2">{count}</span>
                    </div>
                </div>
                <div className="fx">
                    <Child1 count={count} setCount={setCount} />
                    <Child2 count={count} setCount={setCount} />
                </div>
            </div> 
        </div>
    );
}