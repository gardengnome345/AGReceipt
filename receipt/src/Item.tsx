export default function Item({ item }: { item:any})
{
    if(item.type==="cookie")
        {
            if (item.quantity===1)
            {
                return (
                    <div style={{backgroundColor:"pink",display:"flex",justifyContent:"center",alignItems:"center", }} >
                        <div style={{display:"flex",justifyContent:"left", width: 100, height: 50}}> <img src = "https://peanutbutterandjulie.com/wp-content/uploads/2023/12/Stack-of-Rainbow-cookies-sq.jpg"  alt = "Image"/></div>

                    <h2>
                        {item.variety} cookie with a price of {item.price}
                    </h2>
                       </div>

                );
            }
            else {
                return (
                    <div style={{
                        backgroundColor: "pink",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <div style={{display: "flex", justifyContent: "left", width: 100, height: 50}}><img
                            src="https://www.simplyrecipes.com/thmb/2g1IOS6TYdG_bmyg0hyf0b6RKGY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Oatmeal-Raisin-Cookies-LEAD-15-2251dafb1a554aafaedf42e797bf2fd0.jpg"
                            alt="Image"/></div>
                        <h2>
                            {item.quantity} {item.variety} cookies with a total price
                            of{" "} {(item.price * item.quantity).toFixed(2)}
                        </h2>
                    </div>);

            }
        } else if (item.type === "cake") {
        return (
            <div style={{backgroundColor: "pink", padding: "10px", margin: "10px", borderRadius: "5px",}}>
            <div style={{display: "flex", justifyContent: "left", width: 100, height: 50}}><img
                            src="https://www.theflouredtable.com/wp-content/uploads/2022/03/Chocotorta-15-500x500.jpg"
                            alt="Image"/></div>
                        <h2>
                            A {item.shape} {item.flavor} cake {item.shape === "round" ? ` with a radius of ${item.radius}` : ` with dimensions of ${item.length}x${item.width}`} ,
                            priced at {item.price}. Message: "{item.message}".
                        </h2>
                    </div>);
            }
            else if (item.type === "doughnut") {
                return (
                    <div style={{backgroundColor: "pink", padding: "10px", margin: "10px", borderRadius: "5px",}}>
                        <div style={{display: "flex", justifyContent: "left", width: 100, height: 50}}><img
                            src="https://sugarpursuit.com/wp-content/uploads/2023/02/Boston-cream-donuts-thumnail.jpg"
                            alt="Image"/></div>
                        <h2>
                            {item.quantity} {item.flavor} doughnuts for a total
                            of{" "} {(item.price * parseInt(item.quantity)).toFixed(2)}.
                        </h2>
                    </div>);
            }
    return (
        <div style={{backgroundColor: "pink", padding: "10px", margin: "10px"}}>item type.</div>);


}