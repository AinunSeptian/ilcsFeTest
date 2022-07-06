import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Button, Gap } from '../../atoms';
import classes from './SideNavigation.module.css';

const SideNavigation = (props) => {
  // const navigate = useNavigate();

  // const handlePerusahaan = () => {
  //   navigate('/')
  // }

  // const handleBarang = () => {
  //   navigate('/barang')
  //   props.onHandleCLick()
  // }

  return (
    <div className={classes.container}>
      <Button label="Perusahaan" onClick={props.onClickPerusahaan} />
      <Gap height="30px" />
      <Button label="Barang" onClick={props.onClickBarang} />
    </div>
  )
}

export default SideNavigation;