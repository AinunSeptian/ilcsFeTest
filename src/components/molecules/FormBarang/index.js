import React from 'react';
import { Gap, Input, InputSelect } from '../../atoms';

import classes from './FormBarang.module.css'

const FormBarang = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <form action="submit" className={classes.form}>
            <div className={classes["container-left"]}>
                <div className={classes["wrapper-left"]}>
                    <div className={classes["label-left"]}>
                        <label htmlFor="hsCode">hs code</label>
                        <label htmlFor="jumlahBarang">jumlah barang</label>
                        <label htmlFor="tarif">tarif *</label>
                        <label htmlFor="totalHarga">total harga</label>
                    </div>
                    <div className={classes["input-left"]}>
                        <InputSelect id="hsCode" options={options} />
                        <Gap height="34px" />
                        <Input id="jumlahBarang" type="number" />
                        <Input id="tarif" type="number" />
                        <Input id="totalHarga" type="number" />
                    </div>
                </div>
            </div>
            <div className={classes["container-right"]}>
                <div className={classes["wrapper-right"]}>
                    <div className={classes["label-right"]}>
                        <Input id="uraianHsCode" type="text" placeholder="URAIAN HS CODE" />
                        <label htmlFor="hargaBarang">harga barang</label>
                        <label htmlFor="tarifPpn">tarif ppn *</label>
                    </div>
                    <div className={classes["input-right"]}>
                        <Input id="subHeaderHsCode" type="text" placeholder="SUB HEADER HS CODE" />
                        <Input id="hargaBarang" type="number" />
                        <Input id="tarifPpn" type="number" />
                    </div>
                </div>
            </div>
            <div>
                <button className={classes.button}>Add</button>
            </div>
        </form>
    )
}

export default FormBarang;