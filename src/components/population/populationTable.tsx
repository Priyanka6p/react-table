import DataTable, { TableColumn } from "react-data-table-component";

interface Row {
    "ID Nation": string;
    Nation: string;
    "ID Year": string;
    Year: string;
    Population: number;
    "Slug Nation": string;
}

interface Props {
    data: Row[];
    deleteRow: (year: string) => void;
}

const customStyle = {
    rows: {
        style: {
            minHeight: '70px',
            fontSize: '18px',
            backgroundColor: '#E7DDFF'
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
            fontSize: '20px',
            backgroundColor: '#E1D5FF'
        },
    },
    cells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
};

export function PopulationDataTable({ data, deleteRow }: Props) {

    const deleteButton = (row: Row) => (
        <button type='button' onClick={() => deleteRow(row.Year)}>Delete Data</button>
    );

    const columns: TableColumn<Row>[] = [
        {
            name: 'ID Nation',
            selector: row => row["ID Nation"],
        },
        {
            name: 'Nation',
            selector: row => row.Nation,
        },
        {
            name: 'ID Year',
            selector: row => row["ID Year"],
        },
        {
            name: 'Year',
            selector: row => row.Year,
        },
        {
            name: 'Population',
            selector: row => row.Population,
        },
        {
            name: 'Slug Nation',
            selector: row => row["Slug Nation"],
        },
        {
            name: 'Action',
            cell: row => <div>{deleteButton(row)}</div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    return (
        <DataTable
            columns={columns}
            data={data}
            customStyles={customStyle}
            className="tbl"
        />
    );
};