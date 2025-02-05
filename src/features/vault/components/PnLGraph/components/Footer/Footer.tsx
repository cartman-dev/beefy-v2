import { makeStyles } from '@material-ui/core';
import React, { memo } from 'react';
import { BasicTabs } from '../../../../../../components/Tabs/BasicTabs';
import type { VaultEntity } from '../../../../../data/entities/vault';

import { styles } from './styles';

const useStyles = makeStyles(styles);

interface FooterProps {
  period: number;
  handlePeriod: (period: number) => void;
  vaultId: VaultEntity['id'];
  labels: string[];
}

export const Footer = memo<FooterProps>(function Footer({ period, handlePeriod, labels }) {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.tabsContainer}>
        <BasicTabs labels={labels} value={period} onChange={newValue => handlePeriod(newValue)} />
      </div>
    </div>
  );
});
