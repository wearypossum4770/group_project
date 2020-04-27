import React, {useState} from 'react'


/***
 * *::before, *::after, * {
 * box-sizing: border-box;
 * }
 * 
 * body {
 * background-color: hsl(261,88%, 17%);
 * color: hsl(261, 88%, 90%);
 * text-align:center;
 * 
 * }
 * strength-meter{
 * position: relative;
 * height: 2rem;
 * width: 90%;
 * border: 3px solid hsl(261, 88% 57%);
 * boarder-radius: 1rem;
 * margin: 0 auto;
 * overflow: hidden;
 * }
 * 
 * .strength-meter::before{
 * content: '';
 * position: absolute;
 * left: 0;
 * height: 100%;
 * width: calc(1%* var(--strength, 0));
 * background-color: hsl(261, 88%, 67%);
 * }
 * 
 * transition: width 200ms;
 * 
 * .password-input { 
 * width: 90%;
 * padding: .25rem. 75rem;
 * background-color: hsl(2661, 88%, 25%)
 * color: white;
 * border: 1 px solid hsl(261, 88%, 57%)
 * outline: none;
 * border-color:.3rem;
 * }
 * 
 * .paassowrd-input:focus{
 * border-color: hsl(261, 88%, 70%)
 * 
 * }
 * .reasons > *{
 * margin-top: .5rem;
 * color: hsl(261,88%, 80%);
 * 
 * }

*/






const PasswordStrength = props =>{
	const [strengthMeter, setStrengthMeter] = useState(null)
	const [state, setState] = useState(null)
	const [reasonContainer, setReasonContainer] = useState(null)
	const calculatePasswordStrength = password => {
		const weaknesses = []
		weaknesses.push(lengthWeaknesses(password))
		return weaknesses
		}
		
		const lengthWeaknesses = password => {
			
			const length = password.length
			if (legth <= 5) return { message:"your password is too short", deduction: 40,}
			if (length <=10) return { message: "your password could be longer", deduction: 15,}
			
			
			}
	
	return (
	<div>
	<div className="strength-meter"></div>
	<input id="password-input" className="password-input" type="text" autofocus aria-lablledby="password"/>	
	
	<div id="reasons" className="reasons"></div>
	</div>
	
	)
	
	}
	
	export default PasswordStrength
