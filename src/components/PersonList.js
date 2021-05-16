import React from 'react';


export default class PersonList extends React.Component {
  state = {
    persons: []
  }


  componentDidMount() {

var myHeaders = new Headers();
 var access_token = "85285e73480255a7ff2968db8c82baaec0fbee2080c8f6e3e1c4695160c6d401";
myHeaders.append("Authorization", `Bearer ${access_token}`);

//var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  //body: raw,
  redirect: 'follow'
};

fetch("https://www.healthos.co/api/v1/autocomplete/medicines/brands/crocin", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result[0]))
  .catch(error => console.log('error is there', error));


    

 
  }

  render() {
    return (
      <ul>
     { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}



