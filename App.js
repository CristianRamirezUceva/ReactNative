import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, TextInput} from 'react-native'

export default class Formulario extends Component{

  constructor(){
    super()

    this.state = {
      nombre: '',
      edad: '',
      correo: ''
    }
  }

  changeName(nombre){
    this.setState({nombre})
  }
  changeEdad(edad){
    this.setState({edad})
  }
  changeCorreo(correo){
    this.setState({correo})
  }
  buttonPressed(){
    if(this.state.nombre && this.state.edad && this.state.correo){
      alert('Nombre: '+this.state.nombre+'  '+'Edad: '+this.state.edad+'  '+'Correo: '+this.state.correo)
    } else{
      alert('Faltan campos por llenar')
    }
  }
  render(){
    return(
    <View style={styles.containers}>
      <View>
        <Text style={styles.title}>Formulario</Text>
        <TextInput
        style={styles.input}
        placeholder = 'Ingrese Nombre'
        value={this.state.nombre}
        onChangeText={(nombre)=> this.changeName(nombre)}
        />
        <TextInput
        style={styles.input}
        placeholder = 'Ingrese Edad'
        value={this.state.edad}
        onChangeText={(edad)=> this.changeEdad(edad)}
        />
        <TextInput
        style={styles.input}
        placeholder = 'Ingrese Correo'
        value={this.state.correo}
        onChangeText={(correo)=> this.changeCorreo(correo)}
        />
        <TouchableHighlight style={styles.boton}
        onPress={() => this.buttonPressed()}>
          <Text style={styles.textoBoton}>Enviar</Text>
        </TouchableHighlight>
      </View>
    </View>
    )
  }

}

const styles = StyleSheet.create({
  containers:{
    flex : 1,
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15
  },
  boton:{
    backgroundColor: 'skyblue',
    paddingBottom: 16,
    paddingTop: 16
  },
  textoBoton:{
    textAlign: 'center',
    color: 'white'
  },
  title:{
    textAlign: "center",
    fontSize: 19,
    marginBottom: 5
  },
  input:{
    height: 30,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 20
  }
})