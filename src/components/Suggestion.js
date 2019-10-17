import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Suggest extends Component{
  static propTypes = {
    defaultValue: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  }

  getValue = () => this.inputElem.value

  render(){
    const randomid = Math.random().toString(16).substring(2);
    const {defaultValue, options} = this.props;
    return (
      <div>
        <input
          list={randomid}
          defaultValue={defaultValue}
          ref={elem => {this.inputElem = elem}} 
          />
        <datalist id={randomid}>{
          options.map((item,idx) => (<option value={item} key={idx} />))
          }
        </datalist>
      </div>
    )
  }
}

export default Suggest;


