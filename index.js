import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import firebase from './fire.js'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [],
      newDate: "",
      allDates: [],
      //attendanceList: [],
      isLoading: true,
      attendance: [],
      newStudents: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.storeChecked = this.storeChecked.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleStudent = this.handleStudent.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.handleNew = this.handleNew.bind(this);
  }

  handleInputChange(event) {
     
    //console.log( "value: " + event.target.value + " checked: " + event.target.checked);
    //search list for the id number, if there is a match set checked variable
    for(const each of this.state.studentList){
      if( event.target.value == each.name){
        each.checked = event.target.checked;
        //console.log(each.name);
      }
    }
    this.setState({ studentList: this.state.studentList});
    
  }

  handleDate(event){
    console.log(event.target.value);
    this.setState({ newDate : event.target.value});
  }

  storeChecked(event) {
    for(const i=0;  i<this.state.studentList.length; i++){
      if(this.state.studentList[i].checked == true ){       
        //this.state.studentList.map[i]( (item) => <li>{item + " present"}</li> )
        console.log(this.state.studentList[i].name);

      }
    }
  }

  componentWillMount() {
     
      firebase.auth().signInAnonymously().catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
      });

      const studentDB = firebase.database().ref("Track Team");
      

      const tempstudentList = [];
      studentDB.on('value',snapshot => {
        snapshot.forEach(childSnapShot => {
          //childSnapShot.key is the name of the data
          //childSnapShot.val() is the value of the data
          const item = 
          {
              name: childSnapShot.key,
              checked : false
          }
          tempstudentList.push(item);
        });
        
        this.setState({studentList: tempstudentList, isLoading: false });
        
      });

      this.updateStudentList();
  }

  handleClick(input) {
     
    if( input==0 ){

      //Get the Track Team table of firebase
      const studentDB = firebase.database().ref("Track Team");

      const tempstudentList = [];
      studentDB.on('value',snapshot => {
        //Read each item in shoppings
        //Store it in a temporary array
        snapshot.forEach(childSnapShot => {
          //childSnapShot.key is the name of the data
          //childSnapShot.val() is the value of the data
          var thrower = false;
          console.log(childSnapShot.val());
          childSnapShot.val().forEach(function(each) {
            if( each == "Thrower")
              thrower = true;
          });

          if(thrower){
            //console.log(childSnapShot.key);
          const item = 
          {
              name: childSnapShot.key,
              checked : false
          }
            tempstudentList.push(item);
          }
        });
        this.setState({studentList: tempstudentList, isLoading: false });
      });
    }
    
    //Sprinter Button
    if( input==1 ){
      //Get the Shopping List table of firebase
      const studentDB = firebase.database().ref("Track Team");
    
      const tempstudentList = [];
      studentDB.on('value',snapshot => {
        //Read each item in shoppings
        //Store it in a temporary array
        snapshot.forEach(childSnapShot => {
          //childSnapShot.key is the name of the data
          //childSnapShot.val() is the value of the data
          var sprinter = false;
          console.log(childSnapShot.val());
          childSnapShot.val().forEach(function(each) {
            if( each == "Sprinter")
              sprinter = true;
          });

          if(sprinter){
            //console.log(childSnapShot.key);
            const item = 
          {
              name: childSnapShot.key,
              checked : false
          }
            tempstudentList.push(item);
          }
        });

        this.setState({studentList: tempstudentList, isLoading: false });
      });
    }
   
    //Distance Button
    if( input==2 ){

      const studentDB = firebase.database().ref("Track Team");

      const tempstudentList = [];
      studentDB.on('value',snapshot => {
        //Read each item in shoppings
        //Store it in a temporary array
        snapshot.forEach(childSnapShot => {
          //childSnapShot.key is the name of the data
          //childSnapShot.val() is the value of the data

          var distance = false;
          console.log(childSnapShot.val());
          childSnapShot.val().forEach(function(each) {
            if( each == "Distance")
              distance = true;
          });

          if(distance){
            //console.log(childSnapShot.key);
            const item = 
          {
              name: childSnapShot.key,
              checked : false
          }
            tempstudentList.push(item);
          }
        });

        this.setState({studentList: tempstudentList, isLoading: false });

      });
    }
   
    //Hurdler Button
    if( input==3 ){
  
      //Get the Shopping List table of firebase
      const studentDB = firebase.database().ref("Track Team");

      const tempstudentList = [];
      studentDB.on('value',snapshot => {
        //Read each item in shoppings
        //Store it in a temporary array
        snapshot.forEach(childSnapShot => {
          //childSnapShot.key is the name of the data
          //childSnapShot.val() is the value of the data
          var hurdler = false;
          console.log(childSnapShot.val());
          childSnapShot.val().forEach(function(each) {
            if( each == "Hurdler")
              hurdler = true;
          });

          if(hurdler){
            //console.log(childSnapShot.key);
            const item = 
          {
              name: childSnapShot.key,
              checked : false
          }
            tempstudentList.push(item);
          }
        });

        this.setState({studentList: tempstudentList, isLoading: false });
      });
    }
    
     //Jumper Button
    if( input==4 ){
  
      //Get the Shopping List table of firebase
      const studentDB = firebase.database().ref("Track Team");

      const tempstudentList = [];
      studentDB.on('value',snapshot => {
        //Read each item in shoppings
        //Store it in a temporary array
        snapshot.forEach(childSnapShot => {
          //childSnapShot.key is the name of the data
          //childSnapShot.val() is the value of the data
          var jumper = false;
          console.log(childSnapShot.val());
          childSnapShot.val().forEach(function(each) {
            if( each == "Jumper")
              jumper = true;
          });

          if(jumper){
            //console.log(childSnapShot.key);
            const item = 
          {
              name: childSnapShot.key,
              checked : false
          }
            tempstudentList.push(item);
          }
        });

        this.setState({studentList: tempstudentList, isLoading: false });
      });
    }

    //Show All Button
    
     if( input==5 ){
  

      //Get the Shopping List table of firebase
      const studentDB = firebase.database().ref("Track Team");

      const tempstudentList = [];
      studentDB.on('value',snapshot => {
        snapshot.forEach(childSnapShot => {
          const item = 
          {
              name: childSnapShot.key,
              checked : false
          }
          tempstudentList.push(item);

        });


        this.setState({studentList: tempstudentList, isLoading: false });

      });
    }
    
  }

  handleStudent(){
    this.setState({ studentName : event.target.value});
  }

  handleEvent(){
    this.setState({ eventName : event.target.value});
  }


handleNew(event){
  //get new group with studentName 
    const shoppingListItem = firebase.database().ref("Track Team/"+this.state.studentName + "/0");
    console.log(typeof(shoppingListItem));

    //firebase.database().ref('/Track Team/' + this.state.newName + '/').set(this.state.eventName);
    const tempEventList = [];
    //tempEventList.push(this.state.eventName);
    //var num = 0;
    // Add a value to that group

    shoppingListItem.set(
      this.state.eventName
     //this.state.tempEventList
    );

    //this will download update the list from firebase with the updated values
    //this.updateStudentList();
    window.location.reload(false);
  }

handleAdd(event) {
   //get new group with newDate 
    const shoppingListItem = firebase.database().ref("Attendance/"+this.state.newDate + "/");

    let attendance = {};

    for (let i = 0; i < this.state.studentList.length; i++) {
      if (this.state.studentList[i].checked === true) {
        attendance[this.state.studentList[i].name] = 'present';
      }
    }
    for(let i=0; i<this.state.studentList.length; i++){
      if(this.state.studentList[i].checked === false){
        attendance[this.state.studentList[i].name] = 'absent';
      }
    }

    firebase.database().ref('/Attendance/' + this.state.newDate + '/').set(attendance);

    // Add a value to that group
    shoppingListItem.push(
     this.state.itemName
    );


    //this will download update the list from firebase with the updated values
    //this.updateStudentList();
    window.location.reload(false);
  }

  updateStudentList() {
   console.log("updating");
    this.state.allDates = [];
    const groupsDB = firebase.database().ref("Attendance/");
    groupsDB.on('value', snapshot1 => {
      snapshot1.forEach(childSnapShot1 => {

          const shoppingListTemp = [];

          //gettig each item in the group
          const eachItemDB = firebase.database().ref("Attendance/"+childSnapShot1.key);
          eachItemDB .on('value', snapshot2 => {
            snapshot2.forEach(childSnapShot2 =>{

              //each item
              const item = 
              {
                  key: childSnapShot2.key,
                  name: childSnapShot2.val()
              }

              //Add an item object to the shoppingListTemp Array
              shoppingListTemp.push(item);

              //console.log(childSnapShot2.val());
            });
          });

          //get date name
          const dateName = childSnapShot1.key;
          console.log(dateName);

          //create each date with date name and list of items
          const eachDate = {
            date : dateName,
            shoppingList : shoppingListTemp
          }

          console.log(this.state.shoppingList);

          //add each date to allDates
          this.state.allDates.push(eachDate);

          //update screen

          this.setState({isLoading: false });

        });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          loading...
        </div>
      );
    }
    return (
        <div>
        
        Show only:
         <br/>
         <button onClick={this.handleClick.bind(this,0)}>
          Thrower
        </button>
         <button onClick={this.handleClick.bind(this,1)}>
          Sprinter
        </button>
        <button onClick={this.handleClick.bind(this,2)}>
          Distance
        </button>
        <button onClick={this.handleClick.bind(this,3)}>
          Hurdler
        </button>
        <button onClick={this.handleClick.bind(this,4)}>
          Jumper
        </button>
        <br/>
         <button onClick={this.handleClick.bind(this,5)}>
          Show All
        </button>
          <br/>
          <br/>
          New Student (First Last):
          <input type="text" value={this.state.studentName} onChange={this.handleStudent} /> <br/>
          
          Event Type (ex. Thrower):
          <input type="text" value={this.state.studentEvent} onChange={this.handleEvent} /> <br/>
          <button onClick={this.handleNew}>Add New Student</button>
          <br/>

        <br/><br/>
        Student List <br/>
        {
        this.state.studentList.map( (item) => 
        <div><input type="checkbox" value={item.name} onChange={this.handleInputChange} checked={item.checked}/>{item.name}</div>)
        }
        <br/><br/>
          Date (YYYY-MM-DD):
          <input id="dateInput" type="text" value={this.state.itemDate} onChange={this.handleDate} /> <br/>
          <button onClick={this.handleAdd}>Add New Date</button><br/>
          <br/>

          { 
            this.state.allDates.map( (eachDate) =>
              <div>
              {eachDate.date}
              {eachDate.shoppingList.map( (item) => <li key={item.key}>{item.key + ": " + item.name}</li>) } 
              <br/>
              </div>
             
            ) 
          }
        </div>

      );
  }
   
}

render(<App />, document.getElementById('root'));
