import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'

import {LinearGradient} from 'expo-linear-gradient'
import CheckBox from '@material-ui/core/Checkbox'

import Logo from '../../assets/logo.png'

export default function Login() {
  return (

    <LinearGradient colors={['black', 'green']} style={styles.global_container}>


            <Image style={styles.logo} source={Logo}/>

            <View style={styles.container}>

            <View style={styles.input_box}>
                <Text style={styles.label}>EMAIL:</Text>
                <TextInput style={styles.input}/>
            </View>

            <View style={styles.input_box}>
                <Text style={styles.label}>SENHA: </Text>
                <TextInput style={styles.input}/>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.button_text}>
                    ENVIAR
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.button_text}>
                    CADASTRAR
                </Text>
            </TouchableOpacity>
            <View style={styles.func_labels}>
                <Text style={styles.func_label}>ESQUECEU A SENHA?</Text>
                <Text style={styles.func_label}>LEMBRAR-ME? 
                <CheckBox color="secondary"/>
            </Text>
            </View>
            </View>

    </LinearGradient>

  );
}
