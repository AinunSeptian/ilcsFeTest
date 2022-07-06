import React, { useState } from 'react';

import { Gap, Input, InputSelect } from '../../atoms';
import classes from './FormPerusahaan.module.css'

const FormPerusahaan = () => {

    const [transaksi, setTransaksi] = useState("export");

    const handleTransaksi = (event) => {
        setTransaksi(event.target.value)
        console.log(transaksi)
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    return (
        <form action="submit" className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.label}>
                    <label htmlFor="npwp">npwp</label>
                    <label htmlFor="nama">nama</label>
                    <label htmlFor="transaksi">transaksi</label>
                    {transaksi === "export" ? (
                        <label htmlFor="negaraTujuan">negara tujuan</label>

                    ) : (
                        <label htmlFor="negaraAsal">negara asal</label>
                    )}
                    <label htmlFor="pelabuhanTujuan">pelabuhan tujuan</label>
                </div>
                <div className={classes.input}>
                    <Input id="npwp" type="number" />
                    <Input id="nama" type="text" />
                    <select id="transaksi" value={transaksi} onChange={handleTransaksi}>
                        <option value="export">EXPORT</option>
                        <option value="import">IMPORT</option>
                    </select>
                    {transaksi === "export" ? (
                        <InputSelect id="negaraTujuan" options={options} />
                    ) : (
                        <InputSelect id="negaraAsal" options={options} />
                    )}
                    <Gap height="40px" />
                    <InputSelect id="pelabuhanTujuan" options={options} />
                </div>
            </div>
        </form>
    )
}

export default FormPerusahaan;