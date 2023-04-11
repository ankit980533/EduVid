import React from "react";
import Link from "next/link";
function BranchCard(props){
    return (
        <Link href={props.path} >


                <div className="px-6 py-7 sm:px-6">
                  <h2 className="text-lg font-medium leading-6 text-gray-900 p-4 flex items-center justify-center">{props.name}</h2>
                  
                </div>
                
              
</Link>
    )
}
export default BranchCard;