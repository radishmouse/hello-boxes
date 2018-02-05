import React from 'react';
const Box = (props) => {
  // let input = null;
  // if (props.displayText) {
  //   input = (<input value={props.displayText} />);
  // } else {
  //   input = (<input
  //     value={props.displayText}
  //     onChange={ (event) => {
  //       // console.log(event.target.value);
  //       const messageText = event.target.value;
  //       props.changeHandler(messageText);
  //     }}
  //   />)
  // }
  return (<div>
    <input
      value={props.displayText}
      onChange={ (event) => {
        // console.log(event.target.value);
        const messageText = event.target.value;
        props.changeHandler(messageText);
      }}
    />
  </div>);
};

export default Box;