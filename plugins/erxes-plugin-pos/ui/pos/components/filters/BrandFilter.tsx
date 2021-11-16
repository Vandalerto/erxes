import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  __,
  Box,
  DataWithLoader,
  router,
  FieldStyle,
  SidebarCounter,
  SidebarList
} from 'erxes-ui';
import { IBrand } from 'erxes-ui/lib/types'
import { IRouterProps } from '../../../types';

interface IProps extends IRouterProps {
  counts: { [key: string]: number };
  brands: IBrand[];
  loading: boolean;
  emptyText?: string;
}

function Brands({ history, counts, brands, loading, emptyText }: IProps) {
  const data = (
    <SidebarList>
      {brands.map(brand => {
        const onClick = () => {
          router.setParams(history, { brand: brand._id });
          router.removeParams(history, 'page');
        };

        return (
          <li key={brand._id}>
            <a
              href="#filter"
              tabIndex={0}
              className={
                router.getParam(history, 'brand') === brand._id ? 'active' : ''
              }
              onClick={onClick}
            >
              <FieldStyle>{brand.name}</FieldStyle>
              <SidebarCounter>{counts[brand._id]}</SidebarCounter>
            </a>
          </li>
        );
      })}
    </SidebarList>
  );

  return (
    <Box
      title={__('Filter by brand')}
      collapsible={brands.length > 5}
      name="showFilterByBrand"
    >
      <DataWithLoader
        data={data}
        loading={loading}
        count={brands.length}
        emptyText={emptyText || 'Empty'}
        emptyIcon="leaf"
        size="small"
        objective={true}
      />
    </Box>
  );
}

export default withRouter<IProps>(Brands);
