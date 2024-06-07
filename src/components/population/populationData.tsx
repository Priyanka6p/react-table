import React, { useState, useEffect } from 'react';
import { PopulationDataTable } from './populationTable';
import { useDispatch, useSelector } from 'react-redux';
import { addToTable, removeFromTable } from '../../redux/slice';

interface Row {
    "ID Nation": string;
    Nation: string;
    "ID Year": string;
    Year: string;
    Population: number;
    "Slug Nation": string;
}

interface RootState {
    TableData: {
        value: Row[];
    };
}

const PopulationData: React.FC = () => {
    const populations = useSelector((state: RootState) => {
        console.log("Redux State:", state);
        return state.TableData.value;
    });

    const dispatch = useDispatch()
    const apiUrl: string = (process.env.REACT_APP_populationInYears_API_URL as string);
    const [data, setData] = useState<Row[]>([]);
    const [inpValue, setInpValue] = useState<string>('');

    async function fetchApiData() {
        const fetchedData = await fetch(apiUrl);
        const jsonData = await fetchedData.json();
        setData(jsonData.data);
        dispatch(addToTable(jsonData.data));
    };

    useEffect(() => {
        fetchApiData();
    }, []);

    const resetData = () => {
        dispatch(addToTable(data));
    };

    const search = (value: string) => {
        const searchDeb = setTimeout(() => {
            let filteredRows = data.filter((row) => {
                return (row.Year.toString().includes(value) || row.Population.toString().includes(value));
            });
            if (value.length < 1) {
                dispatch(addToTable([]));
            } else {
                dispatch(addToTable(filteredRows));
            }
        }, 1000);
        return () => { clearTimeout(searchDeb); };
    };

    const handleDeleteRow = (id: string) => {
        let filteredData = populations.filter(row => row.Year !== id);
        dispatch(addToTable(filteredData));
        dispatch(removeFromTable(populations));
    };

    return (
        <div>
            <h1>Population In Years</h1>
            <input className='searchBar' type='text' placeholder='Search Year OR Population' value={inpValue} onChange={(e) => {
                setInpValue(e.target.value);
                search(e.target.value);
            }} />
            <button type='button' className='searchBar' onClick={() => resetData()}> Reset </button>
            <PopulationDataTable data={populations} deleteRow={handleDeleteRow} />
        </div>
    );
}

export default PopulationData;