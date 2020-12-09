import React from 'react';
import translate from '../i18n/translate';

function GardenPlanPage() {
  const excalidraw =
    '<a href="https://excalidraw.com/">excalidraw.com &raquo;</a>';
  return (
    <div className="user-content">
      <div className="user-right-box">
        <h2>{translate('garden-plan')}</h2>
        <p>
          <strong>excalidraw</strong> {translate('garden-plan-text')}
          <br />
          <br />
          <span
            dangerouslySetInnerHTML={{
              __html: excalidraw.replace(/href/g, "target='_blank' href"),
            }}
          ></span>
          <br />
          <br />
          {translate('garden-plan-text-info')}
        </p>
        {/* <div className="plan-wrapper">
          <h3>{translate('tools-term')}</h3>
          <div className="plan-tools">
            <ul>
              <li>{translate('line-term')} &mdash;</li>
              <li>{translate('circle-term')}</li>
              <li>{translate('square-term')}</li>
              <li>{translate('rectangle-term')}</li>
              <li>{translate('leafy-tree')}</li>
              <li>{translate('conifer-tree')}</li>
              <li>{translate('deciduous-shrumb')}</li>
              <li>{translate('coniferous-shrumb')}</li>
              <li>{translate('perennials-term')}</li>
              <li>{translate('annual-plants')}</li>
              <li>{translate('text-term')}</li>
              <li>{translate('grid-term')}</li>
            </ul>
            <div className="plan-area"></div>
          </div>
        </div>
        <button type="button" className="plan-btn">
          {translate('save-term')}
        </button> */}
      </div>
    </div>
  );
}

export default GardenPlanPage;
