import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component() {
  constructor(){
    super();
    this.state = {
      
    };
  }
  
  
  
  getWord = (word) =>{
    var searchKeyword = word.toLowerCase();
    var url = "https://rupinwhitehatjr.github.io/dictionary/" + searchKeyword + ".json";

    return fetch(url)
    .then((data) =>{
      if(data.status === 200){
        return data.json();
      }else{
        return null
      }
    })
    .then((response) =>{
      var responseObject = response

      if(responseObject){
        var wordData = responseObject.definitions[0]
        var definition = wordData.description
        var lexicalCategory = wordData.wordtype

        this.setState({
          "word": this.state.text,
          "definition": definition,
          "lexicalCategory": lexicalCategory
        })
      }else{
        this.setState({
          "word": this.state.text,
          "definition":"Not Found"
        })
      }
    })
  }

render(){
  return (
    <View style={styles.container}>
      <TextInput
          style={styles.inputBox}
          placeholder="type here" 
          multiline={true}
      />

      <TouchableOpacity
        style = {styles.inputButton}
        onPress = {() =>{
          
        }}
      >

        <Text>Search</Text>  
      </TouchableOpacity>
          
    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputBox: {
    borderColor: 'black',
    width: 200,
    height: 50,
    backgroundColor: 'white',
    marginTop: -300,
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderWidth:'2px',
  },

  inputButton: {
    width: 100,
    height: 50,
    borderRadius: 40,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderWidth:'2px',
    borderColor:'black',
  }
});
