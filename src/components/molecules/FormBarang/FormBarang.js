import React, { useEffect, useState } from 'react';

import { Gap, Input, InputSelect } from '../../atoms';
import { useDispatch } from 'react-redux';
import { updateBarang } from '../../../features/dataSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SideNavigation from '../SideNavigation/SideNavigation';
import classes from './FormBarang.module.css';

const FormBarang = () => {
    const [dataHsCode, setDataHsCode] = useState({});
    const [idHsCode, setIdHsCode] = useState('');
    const [dataJumlahBarang, setDataJumlahBarang] = useState('');
    const [dataHargaBarang, setDataHargaBarang] = useState('');
    const [dataTotalHarga, setDataTotalHarga] = useState("");
    const [dataTarif, setDataTarif] = useState({
        tarifNormal: '',
        tarifPpn: ''
    });

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { hsCode } = useSelector(state => state.data)
    const { transaction, country, harbor, npwp, name } = useSelector(state => state.data)

    const getDataHsCode = async () => {
        const response = await fetch("https://insw-dev.ilcs.co.id/n/barang?hs_code=01063300");
        const resHsCode = await response.json();
        const hsCode = resHsCode.data.map((data) => {
            return {
                label: data.hs_code_format,
                value: data.hs_code_format,
                sub_header: data.sub_header,
                uraian_id: data.uraian_id
            }
        })
        dispatch(updateBarang({ hsCode }))
    }

    const getPpn = async () => {
        const response = await fetch(`https://insw-dev.ilcs.co.id/n/tarif?hs_code=${idHsCode}`)
        const data = await response.json();
        data.data?.map((data) => {
            if (transaction === "export") {
                setDataTarif({
                    tarifNormal: data.bk,
                    tarifPpn: data.ppnbk
                })
            } else {
                setDataTarif({
                    tarifNormal: data.bm,
                    tarifPpn: data.ppnbm,
                })
            }
        })
    }

    useEffect(() => {
        getDataHsCode()
        if (idHsCode !== "") {
            getPpn();
        }

        if (dataTarif) {
            const totalHarga = +dataHargaBarang +
                +dataTarif.tarifNormal * +dataHargaBarang +
                +dataTarif.tarifPpn * +dataHargaBarang;
            setDataTotalHarga(totalHarga);
        }
    }, [idHsCode, dataHargaBarang]);

    const handleDataJumlahBarang = (event) => {
        setDataJumlahBarang(event.target.value)
    }

    const handleDataHargaBarang = (event) => {
        setDataHargaBarang(event.target.value)
    }

    const changeHsCode = (e) => {
        setIdHsCode(e.value)
        setDataHsCode(e);
    }

    const handlePerusahaan = () => {
        navigate('/')
    }

    const sendAllData = (e) => {
        e.preventDefault();
        const payload = {
            npwp, name, transaction, country, harbor,
            dataTarif, dataHsCode, dataHargaBarang, dataJumlahBarang, dataTotalHarga
        }

        fetch('https://insw-dev.ilcs.co.id/n/simpan', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })
        console.log("All Data : ", payload)
    }

    return (
        <div className={classes.page}>
            <SideNavigation onClickPerusahaan={handlePerusahaan} />
            <div className={classes.main}>
                <form className={classes.form} onSubmit={sendAllData}>
                    <div className={classes["container-left"]}>
                        <div className={classes["wrapper-left"]}>
                            <div className={classes["label-left"]}>
                                <label htmlFor="hsCode">hs code</label>
                                <label htmlFor="jumlahBarang">jumlah barang</label>
                                <label htmlFor="tarif">tarif *</label>
                                <label htmlFor="totalHarga">total harga</label>
                            </div>
                            <div className={classes["input-left"]}>
                                <InputSelect id="hsCode" options={hsCode} onChange={changeHsCode} />
                                <Gap height="34px" />
                                <Input id="jumlahBarang"
                                    type="number"
                                    value={dataJumlahBarang}
                                    onChange={handleDataJumlahBarang}
                                />
                                <Input id="tarif" value={dataTarif.tarifNormal} type="number" />
                                <Input id="totalHarga" type="number" value={dataTotalHarga} />
                            </div>
                        </div>
                    </div>
                    <div className={classes["container-right"]}>
                        <div className={classes["wrapper-right"]}>
                            <div className={classes["label-right"]}>
                                <Input id="uraianHsCode"
                                    type="text"
                                    value={dataHsCode.uraian_id}
                                    placeholder="URAIAN HS CODE"
                                />
                                <label htmlFor="hargaBarang">harga barang</label>
                                <label htmlFor="tarifPpn">tarif ppn *</label>
                            </div>
                            <div className={classes["input-right"]}>
                                <Input id="subHeaderHsCode"
                                    type="text"
                                    value={dataHsCode.sub_header}
                                    placeholder="SUB HEADER HS CODE" />
                                <Input id="hargaBarang"
                                    type="number"
                                    value={dataHargaBarang}
                                    onChange={handleDataHargaBarang}
                                />
                                <Input id="tarifPpn" value={dataTarif.tarifPpn} type="number" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className={classes.button} type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormBarang;