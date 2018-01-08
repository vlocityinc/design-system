// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import { SpinnerContainer, Spinner } from '../../spinners/base/example';

let inputId = 'text-input-id-1';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

// Might need to move this to its own component example
export let FormElement = props => (
  <div className={classNames('slds-form-element', props.className)}>
    {props.children}
  </div>
);

export let FormElementLabel = props => (
  <label
    className={classNames('slds-form-element__label', props.className)}
    htmlFor={inputId}
  >
    {props.children}
  </label>
);

export let FormElementControl = props => (
  <div
    className={classNames(
      'slds-form-element__control slds-form-element__control-animated-label',
      props.className
    )}
  >
    {props.children}
  </div>
);

export let AnimateLabelInput = props => {
  return (
    <input
      {...props}
      id={props.id || inputId}
      className={classNames('slds-input slds-has-value', props.className)}
      type={props.type || 'text'}
      readOnly={props['readOnly']}
      defaultValue={props.defaultValue}
      required
    />
  );
};

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Default = props => (
  <FormElement>
    <FormElementControl>
      <AnimateLabelInput />
      <FormElementLabel>Input Label</FormElementLabel>
    </FormElementControl>
  </FormElement>
);

let Required = props => (
  <FormElement>
    <FormElementControl>
      <AnimateLabelInput required />
      <FormElementLabel>
        <abbr className="slds-required" title="required">
          *
        </abbr>{' '}
        Input Label
      </FormElementLabel>
    </FormElementControl>
  </FormElement>
);

let ErrorState = props => (
  <FormElement className="slds-has-error">
    <FormElementControl>
      <AnimateLabelInput required aria-describedby={props.errorId} />
      <FormElementLabel>
        <abbr className="slds-required" title="required">
          *
        </abbr>{' '}
        Input Label
      </FormElementLabel>
    </FormElementControl>
    <div id={props.errorId} className="slds-form-element__help">
      This field is required
    </div>
  </FormElement>
);

let ErrorIcon = props => (
  <FormElement className="slds-has-error">
    <FormElementControl className="slds-input-has-icon slds-input-has-icon_left">
      <SvgIcon className="slds-input__icon" sprite="utility" symbol="warning" />
      <AnimateLabelInput required aria-describedby={props.errorId} />
      <FormElementLabel>
        <abbr className="slds-required" title="required">
          *
        </abbr>{' '}
        Input Label
      </FormElementLabel>
    </FormElementControl>
    <div id={props.errorId} className="slds-form-element__help">
      This field is required
    </div>
  </FormElement>
);

let Disabled = props => (
  <FormElement>
    <FormElementControl>
      <AnimateLabelInput disabled />
      <FormElementLabel>Input Label</FormElementLabel>
    </FormElementControl>
  </FormElement>
);

let Readonly = props => (
  <FormElement>
    <FormElementControl>
      <AnimateLabelInput readOnly defaultValue="Read Only" placeholder="" />
      <FormElementLabel>Input Label</FormElementLabel>
    </FormElementControl>
  </FormElement>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <FormElement>
    <FormElementControl>
      <AnimateLabelInput />
      <FormElementLabel>Input Label</FormElementLabel>
    </FormElementControl>
  </FormElement>
);

export let states = [
  {
    id: 'input-required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'input-disabled',
    label: 'Disabled',
    element: <Disabled />
  },
  {
    id: 'input-error',
    label: 'Error',
    element: <ErrorState errorId="error-message" />
  },
  {
    id: 'input-error-icon',
    label: 'Error with icon',
    element: <ErrorIcon errorId="error-message" />
  },
  {
    id: 'read-only',
    label: 'Readonly',
    element: <Readonly />
  },
  {
    id: 'static',
    label: 'Static',
    element: (
      <FormElement>
        <FormElementControl>
          <span className="slds-form-element__static">Read Only</span>
          <span className="slds-form-element__label">Input Label</span>
        </FormElementControl>
      </FormElement>
    )
  }
];

export let examples = [
  {
    id: 'left-icon',
    label: 'Left Icon',
    element: (
      <FormElement>
        <FormElementControl className="slds-input-has-icon slds-input-has-icon_left">
          <SvgIcon
            className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
            sprite="utility"
            symbol="search"
          />
          <AnimateLabelInput />
          <FormElementLabel>Input Label</FormElementLabel>
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'right-icon',
    label: 'Right Icon',
    element: (
      <FormElement>
        <FormElementControl className="slds-input-has-icon slds-input-has-icon_right">
          <SvgIcon
            className="slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default"
            sprite="utility"
            symbol="search"
          />
          <AnimateLabelInput />
          <FormElementLabel>Input Label</FormElementLabel>
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'double-icon',
    label: 'Left & Right Icon',
    element: (
      <FormElement>
        <FormElementControl className="slds-input-has-icon slds-input-has-icon_left-right">
          <SvgIcon
            className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
            sprite="utility"
            symbol="search"
          />
          <AnimateLabelInput />
          <button className="slds-input__icon slds-input__icon_right slds-button slds-button_icon">
            <SvgIcon
              className="slds-button__icon slds-icon-text-light"
              sprite="utility"
              symbol="clear"
            />
            <span className="slds-assistive-text">Clear</span>
          </button>
          <FormElementLabel>Input Label</FormElementLabel>
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'double-icon-spinner',
    label: 'Icons with Spinner',
    element: (
      <FormElement>
        <FormElementControl className="slds-input-has-icon slds-input-has-icon_left-right">
          <SvgIcon
            className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
            sprite="utility"
            symbol="search"
          />
          <AnimateLabelInput />
          <div className="slds-input__icon-group slds-input__icon-group_right">
            <Spinner className="slds-spinner_brand slds-spinner_x-small slds-input__spinner" />
            <button className="slds-input__icon slds-input__icon_right slds-button slds-button_icon">
              <SvgIcon
                className="slds-button__icon slds-icon-text-light"
                sprite="utility"
                symbol="clear"
              />
              <span className="slds-assistive-text">Clear</span>
            </button>
          </div>
          <FormElementLabel>Input Label</FormElementLabel>
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'fixed-text',
    label: 'Fixed text',
    element: (
      <FormElement>
        <FormElementControl className="slds-input-has-fixed-addon">
          <span className="slds-form-element__addon">$</span>
          <AnimateLabelInput />
          <span className="slds-form-element__addon">euro</span>
          <FormElementLabel>Input Label</FormElementLabel>
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'field-level-help',
    label: 'Field level help',
    element: (
      <div className="demo-only" style={{ paddingTop: '5rem' }}>
        <div className="slds-form-element">
          <label
            className="slds-form-element__label slds-align-middle"
            htmlFor="form-help"
          >
            Text Label
          </label>
          <div className="slds-form-element__icon">
            <button
              aria-describedby="help"
              className="slds-button slds-button_icon"
            >
              <SvgIcon
                className="slds-icon slds-icon_x-small slds-icon-text-default"
                sprite="utility"
                symbol="info"
              />
              <span className="slds-assistive-text">Help</span>
            </button>
          </div>
          <div className="slds-form-element__control">
            <input
              className="slds-input"
              id="form-help"
              placeholder="Field Level Help"
              type="text"
            />
          </div>
        </div>
        <div
          className="slds-popover slds-popover_tooltip slds-nubbin_bottom-left"
          id="help"
          role="tooltip"
          style={{
            position: 'absolute',
            top: '15px',
            left: '72px',
            marginLeft: '-1rem',
            width: '20rem'
          }}
        >
          <div className="slds-popover__body slds-text-longform">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              facere eligendi reiciendis obcaecati.
            </p>
          </div>
        </div>
      </div>
    )
  }
];
