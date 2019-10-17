import classNames from 'classnames';
import React from 'react';
import {PropTypes} from 'prop-types';
import '../css/components/Button.css';

class Button extends React.Component{

  constructor(props){
    super(props);
    this.cssclasses = classNames('Button', props.className);
  }

  render(){
    return this.props.herf
      ? <a {...this.props} className={this.cssclasses} />
      : <button {...this.props} className={this.cssclasses} />;

  }
}

Button.propTypes = {
  href: PropTypes.string,
};

export default Button;
