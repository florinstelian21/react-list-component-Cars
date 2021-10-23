import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

// CREATE FamilyList component
    function FamilyList(props) {
      // assign props.siblings to siblings variable to clean up code (optional)
      var siblings = props.siblings;
      // use map method on siblings array to create new array full of JSX code
      var siblingsListItem = siblings.map(function(person) {
        return <div key={person.id}>{person.name}</div>
      });
      return(
        <div>{siblingsListItem}</div>
      );
    }
    // Alternative FamilyList component
    // function FamilyList(props) {
    //   return(
    //     <div>{props.siblings.map(function(person) {
    //       return <div key={person.id}>{person.name}</div>
    //     })}</div>
    //   );
    // }
    // ARRAY OF OBJECTS - 3 PROPS (ID, NAME AND FEMALE) 3 VALUES (NUMBER, STRING, BOOLEAN)
    var siblings = [{id: 1, name: 'Ugrasenan', male: false}, {id: 2, name: 'Vellaichamy', male: false},
                {id: 3, name: 'Rithu', female: true}, {id: 4, name: 'Athi', male: true}];


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
ya
  render() {
    return (
      <div>
       <FamilyList
        siblings={siblings}
      />
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
