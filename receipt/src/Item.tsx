export default function Item({ item }: { item:any})
{
    if(item.type==="cookie")
        {
            if (item.quantity===1)
            {
                return (
                    <div style={{backgroundColor:"green",display:"flex",justifyContent:"center",alignItems:"center", }} >
                     {item.variety} cookie with a price of {item.price}</div>); }
            else
            {
                return(
                    <div style={{backgroundColor:"lightgreen",display:"flex",justifyContent:"center",alignItems:"center", }} >{item.quantity} {item.variety} cookies with a total price of{" "} {(item.price * item.quantity).toFixed(2)}</div>);
            }
        }
        else
            if(item.type==="cake")
            {
                return(
                    <div style={{backgroundColor:"pink",padding:"10px",margin:"10px",borderRadius:"5px", }} >A {item.shape} {item.flavor} cake {item.shape === "round" ? ` with a radius of ${item.radius}` : ` with dimensions of ${item.length}x${item.width}`} , priced at {item.price}. Message: "{item.message}".</div>);
            }
            else
                if (item.type==="doughnut")
                {
                    return(
                        <div style={{backgroundColor:"yellow",padding:"10px",margin:"10px",borderRadius:"5px", }} >{item.quantity} {item.flavor} doughnuts for a total of{" "} {(item.price * parseInt(item.quantity)).toFixed(2)}.</div>);
                }
                return(
                    <div style={{backgroundColor:"gray",padding:"10px",margin:"10px" }}>item type.</div>);
}