export default function Item({item}: {item: any})
{
    if (item.type === "cookie")
    {
        if (item.quantity === 1)
        return(
            <>
                <div style = {{backgroundColor: "green", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    A {item.variety} cookie with a price of ${item.price}
                </div>
            </>
        )
    }














}