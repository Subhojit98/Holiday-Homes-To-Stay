import { tableDataProps } from "../../interface/TableData"
import TableText from "./TableText";


const Table: React.FC<tableDataProps> = ({ tHaed, tVal }) => {
    // Background colors for Table
    // const tableBg = ['tableBg_2', 'tableBg_1'];
    // Define the number of columns per row
    const columnsPerRow = tHaed.length; // Adjust this as needed

    const rows = Math.ceil(tVal.length / columnsPerRow);

    return (
        <>
            <div className="w-full tablet:pl-8  bigTablet:mb-10 desktop:mb-16 flex justify-center bigTablet:w-[95%]">
                <div className="overflow-x-auto ml-7 tablet:ml-0 ">
                    <div className="relative shadow-md sm:rounded-lg  ">
                        <table className=" text-left ">
                            <thead className="text-xs border-b border-black text-black">
                                <tr>
                                    {tHaed?.map((head, i) => (
                                        <th
                                            key={i}
                                            scope="col"
                                            className={`px-6 py-3 tablet:py-11 bigTablet:py-5 desktop:py-9 border-b border-black font-chakra text-sm uppercase ${i % 2 == 0 ? 'bg-tableBg_2' : 'bg-tableBg_1'} `}

                                        >
                                            {head}
                                        </th>

                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: rows }).map((_, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        className="border-b border-black text-white"
                                    >
                                        {tVal.slice(rowIndex * columnsPerRow, (rowIndex + 1) * columnsPerRow).map((text, i) => (
                                            <td
                                                key={i}
                                                scope="row"
                                                className={`px-6 py-4 tablet:py-9 bigTablet:py-5 desktop:py-6 font-medium whitespace-nowrap font-Raleway text-tableText ${i % 2 == 1 ? 'bg-tableBg_1' : 'bg-tableBg_2'}`}
                                            >
                                                {text}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <TableText />
        </>

    );
};

export default Table;