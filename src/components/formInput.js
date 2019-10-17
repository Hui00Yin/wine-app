import Rating from './Rating';
import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Suggest from './Suggestion';
import '../css/components/FormInput.css';

class FormInput extends Component {
  getValue() {
    return 'value' in this.input
           ? this.input.value
           : this.input.getValue();
  }

  render(){
    const common = {
      id: this.props.id,
      ref: elem => this.input = elem,
      defaultValue: this.props.defaultValue || this.props.sample,
    };

    switch(this.props.type){
      case 'year':
        return (
          <input
            {...common}
            type="number"
            defaultValue={this.props.defaultValue || new Date().getFullYear()} />
        );
      case 'suggest':
        return (<Suggest {...common} options= {this.props.options} />);
      case 'rating':
        return (
          <Rating
            {...common}
            defaultValue={parseInt(this.props.defaultValue, 10)} />
        );
      case 'text':
        return <textarea {...common} />;
      default:
        return <input {...common} type="text" />;
    }
  }
}

FormInput.propTypes = {
  type: PropTypes.oneOf(['year', 'suggest', 'rating', 'text', 'input']),
  id: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.any,
};

export default FormInput


