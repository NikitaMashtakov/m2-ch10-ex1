import PropTypes, { string } from 'prop-types';
import { Component } from 'react';
export class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { addClasses, ...restProps } = this.props;

    return (
      <button
        className={`items-center flex justify-center border-0 p-[5px] rounded-sm w-max hover:bg-[#d8d8d89c] ${addClasses}`}
        {...restProps}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  addClasses: string,
  children: PropTypes.element,
};

// import PropTypes from 'prop-types';
// import { Component } from 'react';
// export class Button extends Component {
//   render() {
//     return (
//       <button
//         className="items-center flex justify-center border-0 p-[5px] rounded-sm w-max hover:bg-[#d8d8d89c]"
//         {...this.props}
//       >
//         {this.props.children}
//       </button>
//     );
//   }
// }

// Button.propTypes = {
//   children: PropTypes.element,
// };
