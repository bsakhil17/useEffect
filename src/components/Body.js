import { useEffect, useState } from "react";
import  ReastarauntCard from "./ReastarauntCard"

   

const Body = async () =>{
    const [listofRestaraunt,setlistofRestaraunt]=useState([]);

   useEffect(()=>{
     fetchData();
   },[])

   const fetchData  = async () =>{
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.052942576577722&lng=77.61899217824806&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )}

     const json= await data.json()  
     console.log(json) 
     setlistofRestaraunt(json)    
      return (
        <div className="body">
         <div className="filter">
         <button className="filter-btn" onClick={()=>{
            //filter fun
            const filteredList=listofRestaraunt.filter((res)=>res.data.avgRating>4)
         }}>Top Rated Restaurant</button>
         </div>
         <div className="res-conatiners">
            {listofRestaraunt.map((restaraunt)=>(
                <ReastarauntCard resData={restaraunt}/>
           ))}
        
         </div>
         </div>   
    )
    }
    export default Body;