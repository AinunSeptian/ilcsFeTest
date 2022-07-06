import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Button, Gap } from '../../atoms';
import classes from './SideNavigation.module.css';

const SideNavigation = () => {
  const navigate = useNavigate();

  const handlePerusahaan = () => {
    navigate('/')
  }

  const handleBarang = () => {
    navigate('/barang')
  }

  return (
    <div className={classes.container}>
      <Button label="Perusahaan" onClick={handlePerusahaan} />
      <Gap height="30px" />
      <Button label="Barang" onClick={handleBarang} />
    </div>
  )
}

export default SideNavigation;