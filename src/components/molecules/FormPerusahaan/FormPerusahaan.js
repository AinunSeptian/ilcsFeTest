import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { update } from '../../../features/dataSlice';
import { Gap, Input, InputSelect } from '../../atoms';
import SideNavigation from '../SideNavigation/SideNavigation';
import classes from './FormPerusahaan.module.css'

const FormPerusahaan = (props) => {
    const navigate = useNavigate()

    const [transaction, setTransaction] = useState("export");
    const [dataCountry, setDataCountry] = useState([]);
    const [dataHarbor, setDataHarbor] = useState([]);
    const [dataNpwp, setDataNpwp] = useState("");
    const [dataName, setDataName] = useState("");
    const [kdNegara, setKdNegara] = useState("ID");
    const [countrySelect, setCountrySelect] = useState("");
    const [harborSelect, setHarborSelect] = useState("")
    const dispatch = useDispatch();

    const handleTransaction = (event) => {
        setTransaction(event.target.value)
        // console.log(transaction)
    };

    const getDataCountry = async () => {
        const response = await fetch('https://insw-dev.ilcs.co.id/n/negara?ur_negara=IND')
        const resCountry = await response.json()
        const country = resCountry.data.map((data) => {
            return {
                label: data.ur_negara,
                value: data.kd_negara
            }
        })
        setDataCountry(country)
    };

    const getDataHarbor = async (countrySelect) => {
        const response = await fetch(`https://insw-dev.ilcs.co.id/n/pelabuhan?kd_negara=${countrySelect}`)
        const resHarbor = await response.json()
        const harbor = resHarbor.data.map((data) => {
            return {
                label: data.ur_pelabuhan,
                value: data.kd_pelabuhan
            }
        })
        setDataHarbor(harbor)
    }

    useEffect(() => {
        getDataCountry()
        getDataHarbor(kdNegara)
    }, [kdNegara]);

    const handleCountrySelect = (e) => {
        setCountrySelect(e.label)
        // console.log(countrySelect)
        setKdNegara(e.value)
    }

    const handleDataNpwp = (event) => {
        setDataNpwp(event.target.value)
    }

    const handleDataName = (event) => {
        setDataName(event.target.value)
    }

    // const handleHarborSelect = (value) => {
    //     setHarborSelect(value)
    //     console.log(harborSelect)
    // }

    const handleData = (event) => {
        event.preventDefault();
        dispatch(update({
            transaction: transaction,
            country: countrySelect,
            harbor: harborSelect,
            npwp: dataNpwp,
            name: dataName,
        }))
        navigate('/barang')
    }


    return (

        <div className={classes.sidebar}>
            <SideNavigation onClickBarang={handleData} />

            <main className={classes.main}>
                <form className={classes.container}>
                    <div className={classes.wrapper}>
                        <div className={classes.label}>
                            <label htmlFor="npwp">npwp</label>
                            <label htmlFor="nama">nama</label>
                            <label htmlFor="transaksi">transaksi</label>
                            {transaction === "export" ? (
                                <label htmlFor="negaraTujuan">negara tujuan</label>

                            ) : (
                                <label htmlFor="negaraAsal">negara asal</label>
                            )}
                            <label htmlFor="pelabuhanTujuan">pelabuhan tujuan</label>
                        </div>
                        <div className={classes.input}>
                            <Input id="npwp" type="number" value={dataNpwp} onChange={handleDataNpwp} />
                            <Input id="nama" type="text" value={dataName} onChange={handleDataName} />
                            <select id="transaksi" value={transaction} onChange={handleTransaction}>
                                <option value="export">EXPORT</option>
                                <option value="import">IMPORT</option>
                            </select>
                            {transaction === "export" ? (
                                <InputSelect id="negaraTujuan" options={dataCountry} onChange={(event) => handleCountrySelect(event)} />
                            ) : (
                                <InputSelect id="negaraAsal" options={dataCountry} onChange={(event) => handleCountrySelect(event)} />
                            )}
                            <Gap height="40px" />
                            <InputSelect id="pelabuhanTujuan" options={dataHarbor} onChange={(event) => setHarborSelect(event.label)} />
                        </div>
                    </div>
                    {/* <button>add</button> */}
                </form>
            </main>
        </div>



    )
}

export default FormPerusahaan;