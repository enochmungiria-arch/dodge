
function ItemCard(){
  const Description= "Turn any space into your personal gym with our Ultimate Speed Jump Rope. Built for high-intensity cardio, endurance building, and fat burning, this premium fitness tool is engineered to deliver a seamless, tangle-free skipping experience every time"
  const amount= "KES 2500"
return(
    <div
       style={{
            display:"flex",
            flexDirection: "column",
            width: "300px",
            border:"2px solid rgba(0,0,0,0.2)",
            padding:"2px 4px 2px 4px",

        }}
        >
        <div style={{ width:"100%", display:"flex", justifyContent: "center"}}>
        <img
        width={"200px"} 
        src="https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL480_FMwebp_QL65_.jpg"
        />
        </div>

         
            <div style={{textAlign:"left", fontSize:"30px"}}>{Description}</div>
            <div style={{fontSize:"20px"}}>{amount}</div>
            <div stype={{display:"flex",justifyContent:"center"}}>
                <button 
                style={{
                    border:"2px solid rgba(0,0,0,0.1)",
                    padding:"2px 4px 2px 4px",
                    color:"white",
                    backgroundColor:"orange",

                }}
                >
                    Add to Cart

        

                </button>

        
</div>
</div>



    
);
}
export default ItemCard;