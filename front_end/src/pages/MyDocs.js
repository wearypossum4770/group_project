import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import FolderIcon from "@material-ui/icons/Folder";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

const timesheetType = "Quarterly";
const MyDocs = (props) => {
  // const userData = useContext(UserContext)
  const pdfDocumentList = ["week1", "week2", "week3", "week4", "week5"];

  return (
    <div className="container-sm p-5">
      {/* <input type="file"/> */}
      <div className="btn-group p-5">
        <span>
          Create Timesheet
          <br />
          <span>
            <button>
              <SvgIcon component={NoteAddIcon} />
            </button>
            {timesheetType}
          </span>
          <span>
            <button>
              <SvgIcon className="svgicon" component={NoteAddIcon} />
            </button>
            Weekly
          </span>
        </span>
      </div>
      <div className="document-icons p-5">
        {pdfDocumentList.map((pdfDoc, index) => (
          <button key={index} value={pdfDoc}>
            <SvgIcon
              style={{ fontSize: "34px", color: "blue" }}
              component={FolderIcon}
            />
            {pdfDoc}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyDocs;
