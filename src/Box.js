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

  let textToOutput = props.displayText;
  if (props.transformText) {
    textToOutput = props.transformText(props.displayText);
  }

  return (<div>
    <input
      value={textToOutput}
      onChange={ (event) => {
        // console.log(event.target.value);
        const messageText = event.target.value;
        props.changeHandler(messageText);
      }}
    />
  </div>);
};

export default Box;