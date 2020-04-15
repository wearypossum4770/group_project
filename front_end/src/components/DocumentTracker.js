import React from 'react'


const DocumentTracker = () = > {
	
	switch (approvalStatus){
		case REJECTED:
		return style = {
			#reject {
			  width:"100px",
			  height:"100px",
			  background:"red",
			  position:"relative",
			}
			#reject:before {
			  content: "",
			  width:"100px",
			  height:"0",
			  position:"absolute",
			  top:"0",
			  left:"0",
			  borderBottom:"29px solid red",
			  borderLeft:"29px solid #eee",
			  borderRight:"29px solid #eee",
			}
			#reject:after {
			  content: "",
			  width:"100px"
			  height:"0",
			  position:"absolute",
			  bottom:"0",
			  left:"0",
			  borderTop:"29px solid red",
			  borderLeft:"29px solid #eee",
			  borderRight:"29px solid #eee",
			}
		}
		case IN_REVIEW:
		return style = {
			width:"0",
			height:"0",
			borderLeft:"50px solid transparent",
			borderRight:"50px solid transparent",
			boarderBottom:"yellow"
			} 
		case APPROVED:
		return style = {
			width:"200px", 
			height:"100px", 
			background:"green"
			}
		default:
		return style = {
			opacity:"0.5",
			width:"200px", 
			height:"100px", 
			background:"grey"
			}
		}
	}

// #getbold {border:"1px solid black",animation:"getbold 5s infinite"} @keyframes getbold {50%{fontWeight:"bold"}}
// #theflash {position:"absolute", backgroundColor:"red",border:"1px solid black",animation:"theflash 5s infinite"} @keyframes theflash {50%{opacity:"0"}}
