import React from "react";
import {View, Text, StyleSheet } from "react-native";
import { Component } from "react";

type SignInProps = Record<string, never>;

type SignInState = Record<string, never>;

export default class SignIn extends Component<SignInProps, SignInState> {

    render () {
        return (
            <View style={styles.container}>
                <Text>Tela de Login</Text>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
