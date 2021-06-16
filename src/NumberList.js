import React from 'react';

function ListItem(props){
  //Tidak perlu menentukan kunci disini
  return <li>{props.value}</li>;
}

function NumberList(props){
  const numbers = props.numbers;
//  const listItems = numbers.map((number) =>
//   <ListItem key={number.toString()} value={number} />
//  );
  return (
   <ul>
   {numbers.map((number) =>
   <ListItem key={number.toString()} value={number} />
  )}</ul>
  );
}

export default NumberList;