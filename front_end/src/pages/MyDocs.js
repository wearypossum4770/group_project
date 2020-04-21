import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon';
import FolderIcon from '@material-ui/icons/Folder';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const timesheetType = "Quarterly"
const MyDocs = props => {
    // const userData = useContext(UserContext)
    const pdfDocumentList = ['week1', 'week2', 'week3', 'week4', 'week5']

    return (
        <div className="container-sm p-5">
            <div className="btn-group p-5">

                <button>
                    <SvgIcon
                        style={{ fontSize: "34px", color: "blue" }}
                        component={NoteAddIcon} />{timesheetType} Timesheet
                </button>
                <button>
                    <SvgIcon
                        style={{ fontSize: "34px", color: "blue" }}
                        component={NoteAddIcon} />Weekly Timesheet
                </button>
            </div>


            <div className="document-icons p-5">
                {pdfDocumentList.map((pdfDoc, index) => (
                    <button 
                        key={index}
                        value={pdfDoc}>
                        <SvgIcon
                            style={{ fontSize: "34px", color: "blue" }}
                            component={FolderIcon} />
                        {pdfDoc}
                    </button>))
                }
            </div>
        </div>
    )
}

export default MyDocs