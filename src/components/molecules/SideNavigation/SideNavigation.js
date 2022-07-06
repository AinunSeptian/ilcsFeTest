import React from 'react';

import { Button, Gap } from '../../atoms';
import classes from './SideNavigation.module.css';

const SideNavigation = (props) => {
  return (
    <div className={classes.container}>
      <Button label="Perusahaan" onClick={props.onClickPerusahaan} />
      <Gap height="30px" />
      <Button label="Barang" onClick={props.onClickBarang} />
    </div>
  )
}

export default SideNavigation;