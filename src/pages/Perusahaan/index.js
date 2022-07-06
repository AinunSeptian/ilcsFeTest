import React from 'react';
import { FormPerusahaan } from '../../components';

import classes from './Perusahaan.module.css';

const Perusahaan = () => {
    return (
        <section className={classes.container}>
            <FormPerusahaan />
        </section>
    )
}

export default Perusahaan;