export const ROLE = {
	ADMIN: 'adminstrative',
	STAFF: 'staff',
	ITDEV: 'developer',
	ANONS: 'anonymous',
	INSTR: 'instructor',
	STDNT: 'student',
	WRITS: 'subpoena',
	OPRTY: 'other party',
	}
	
export const permissions = {
	ADMIN: {	
		CREATE: true,
		READ:true,
		UPDATE:true,
		DELETE:true,
		AUTH: true,
		GLOBAL: true,
		},
	STAFF: {
		CREATE: true,
		READ:true,
		UPDATE:true,
		DELETE:false,
		AUTH: false,
		GLOBAL: true,
		},
	APPRENTICESUPERVISOR: {
		CREATE: true,
		READ:true,
		UPDATE:true,
		DELETE:false,
		AUTH: false,
		GLOBAL: false,
		},
	APPRENTICE: {
		CREATE:true,
		READ:true,
		UPDATE:true,
		DELETE:false, 
		AUTH:false,
		GLOBAL:false,
		},
	}	
	
export const  webDevSimplified =  { 
	ROLE:ROLE,
	users: [
    { id: 1, name: 'Kyle', role: ROLE.ADMIN },
    { id: 2, name: 'Sally', role: ROLE.BASIC },
    { id: 3, name: 'Joe', role: ROLE.BASIC }
  ],
  projects: [
    { id: 1, name: "Kyle's Project", userId: 1 },
    { id: 2, name: "Sally's Project", userId: 2 },
    { id: 3, name: "Joe's Project", userId: 3 }
  ]
	
	}
