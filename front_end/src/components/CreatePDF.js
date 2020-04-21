import React from 'react'
import sys from 'sys'
import fs from 'fs'
import pdf from 'pdfjs'
import { Courier as fontType } from 'pdfjs/font/Courier'
const availableFonts = [
    "Courier", "Courier-Bold", "Courier-BoldOblique",
    "Courier-Oblique", "Helvetica", "Helvetica-Bold",
    "Helvetica-BoldOblique", "Helvetica-Oblique", "Symbol",
    "Times", "Times-Bold", "Times-BoldItalic",
    "Times-Italic", "Times-Roman", "ZapfDingbats"
]

const documentProperties = {
    title: '', author: "", subject: "",
    keywords: "", creator: "", producer: "",
    creationDate: "", modDate: "",
}
const documentOptions = {
    width: null, height: null, padding: null,
    font: fontType, fontSize: null, color: "000000",
    lineHeight: 1.15, properties: documentProperties
}


const CreatePDF = props => {

    return (
        <div>REndering PDF</div>
    )


}

export default CreatePDF


const stuff = {
    month_of: "",
    year_of: "",
    apprentice_name: "",
    apprentice_type: "barber",
    instructor_name: "",
    shop_name: "",
    shop_license_number: "",
    apprentice_home_address: "",
    days_absent: "",
    exam_grade: "",
    monthly_quarterly: "quarter",
    time_sheet_data: {
        subject_title: ['history', 'professional image', 'bacteriology', 'sterilization and sanitization', 'implements, tools, and equipment', 'properties and disorders of the skin', 'treatement of hair and scalp', 'facial massage and treatments', 'shaving', 'haircutting', 'hairstyling', 'mustache and beard design', 'permanent waving', 'chemical hair relaxing and soft curl permanents', 'hair coloring', 'hair pieces', 'chemistry', 'anatony and physiology', 'salesmanship and shop management', 'state law'],
        subject_hours: [10, 10, 10, 40, 30, 30, 40, 10, 70, 850, 650, 10, 60, 60, 60, 10, 10, 10, 10, 20],
        entered_hours: ''
    }