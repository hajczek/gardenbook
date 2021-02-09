import React from 'react';
import { NavLink } from 'react-router-dom';
import translate from '../../i18n/translate';
import ExistedPlantsList from './ExistedPlantsList';

const ManagePlantsCard = () => {
  return (
    <div className="user-content">
      <div className="content">
        <div className="top-box">
          <h2>{translate('manage-plants')}</h2>
          <NavLink
            to="/add-plant"
            exact={true}
            activeClassName="is-active"
            id="add-plant-link"
            className="plus-link"
          >
            + {translate('add-plant')}
          </NavLink>
        </div>
        <ExistedPlantsList />
      </div>
    </div>
  );
};

export default ManagePlantsCard;
