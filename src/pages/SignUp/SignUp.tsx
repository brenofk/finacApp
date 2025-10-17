import React from "react";
import {View, Text, StyleSheet } from "react-native";
import { Component } from "react";

type SignUpProps = Record<string, never>;

type SignUpState = Record<string, never>;

export default class SignUp extends Component<SignUpProps, SignUpState> {

    render () {
        return (
            <View style={styles.container}>
                <Text>Tela de Cadastro</Text>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})