import React, {useState} from 'react'
import Select from 'react-select'
import {MANIAPPREN} from '../data/LicenseeData'
	
class GraphSelection extends Select {
//do not use a constructor method or a super method.
// it will destroy the inheritance and cause unintended side-effects.
	render(){
		console.log(this.state)
		return(
		
		<h1>GRPAH SELECTION</h1>
		)	
	}
}
export default GraphSelection;
