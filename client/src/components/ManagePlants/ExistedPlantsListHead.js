import React from 'react';
import translate from '../../i18n/translate';

const ExistedPlantsListHead = () => {
  return (
    <>
      <tr>
        <td colSpan="11">
          <h3>{translate('plant-list')}</h3>
        </td>
      </tr>
      <tr>
        <th className="shortTd">{translate('lp-term')}</th>
        <th className="longTd">{translate('plant-name')}</th>
        <th className="longTd">{translate('photo-term')}</th>
        <th>
          {translate('quantity-term')}
          <br />[{translate('pcs-term')}]
        </th>
        <th>
          {translate('unit-price')}
          <br />[{translate('currency-sign')}]
        </th>
        <th>
          {translate('value-term')}
          <br />[{translate('currency-sign')}]
        </th>
        <th>{translate('fertilizer-term')}</th>
        <th>
          {translate('fert-dose')}
          <br />[{translate('fert-unit')}]
        </th>
        <th colSpan="2" className="longTd">
          {translate('freq-term')}
          <br /> {translate('fertil-water')}
          <br />[{translate('per-year')}] / [{translate('per-week')}]
        </th>
        <th>{translate('edit-term')}</th>
        <th>{translate('delete-term')}</th>
      </tr>
    </>
  );
};

export default ExistedPlantsListHead;
