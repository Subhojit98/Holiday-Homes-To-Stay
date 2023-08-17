import { tableDataProps } from "../interface/TableData"

const page_1_tableData:tableDataProps = {
    tHaed: [
    'Minimum investment',
    'Projected return:',
    'Issue price:',
    'Next pricing cycle:',
    'Type of investment:'
],

tVal:[
    "USD 25'000",
    '7.14% per year',
    "USD 1'334",
    "End of quarter",
    "Certificate",
    "USD 100'000",
    "9.52% per year",
    "USD 1'000",
    "End of quarter",
    "Certificate",
],
}
const page_2_tableData:tableDataProps = {
    tHaed: [
    'Bond issue',
    'Interest',
    'Interest payments',
    'Duration',
    'Minimum investment',
    'Term summary:',
],

tVal:[
    "conditionally secured bond",
    '2.23% per year',
    "Monthly",
    "48 months (4 years)",
  "25'000",
  "Fully asset backed upon availability",

    "conditionally secured bond",
    '3.28% per year',
    "Monthly",
    "84 months (7 years)",
  "25'000",
  "Fully asset backed upon availability",

    "senior corporate bond",
    '4.15% per year',
    "Monthly",
    "48 months (4 years)",
  "25'000",
  "Senior",

    "senior corporate bond",
    '6.25% per year',
    "Monthly",
    "84 months (7 years)",
  "25'000",
  "Senior",

    "convertible bond",
    '7.40% per year',
    "Monthly",
    "48 months (4 years)",
  "25'000",
  "Junior",

    "convertible bond",
    '8.12% per year',
    "Monthly",
    "84 months (7 years)",
  "25'000",
  "Junior",
],
}

const page_3_tableData:tableDataProps = {
    tHaed: [
    'A-share performance',
    'USD 46.33 per A-share',
    'USD 60.80 per A-share',
],

tVal:[
    "Minimum investment",
    "USD 1'000'000",
    "USD 500'000",

    "Directly on the captable:",
    'Yes',
    "Yes",
  
    "Board seat",
    'Yes',
    "No",

    "ROI",
    '16.05% p.a. (levered)',
    "12.23% p.a. (levered)",


    "IRR",
    '14.29% p.a. (investor level)',
    "10.89% p.a. (investor level)",


    "Overall development costs",
    'USD 66M',
    "USD 66M",


    "Leverage",
    '40%',
    "40%",


    "Subordinated debt",
    '25%',
    " 	25%",

    "Total equity required",
    ' 	USD 23.1M',
    "USD 23.1 M",
],
}

export {page_1_tableData, page_2_tableData, page_3_tableData}