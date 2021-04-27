/* view home */
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

function RenderizaCampeonato(props) {
    const { navigation } = props
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Copa do Brasil')} >
            <View style={{ width: '100%', height: 110, backgroundColor: 'white', padding: '5%', borderRadius: 15, marginTop: 10, marginBottom: 10 }}>
                <View flex={1} flexDirection={'row'}>
                    <View padding='5%'>
                        <Image
                            source={require('../img/logoCopaDoBrasil_noText.png')}
                            style={{ width: 50, height: 54 }}
                            resizeMode="contain"
                        />
                    </View>
                    <View padding='5%' borderLeftWidth={1} borderLeftColor={'green'} style={{ alignContent: 'center', justifyContent: 'center' }}>
                        <Text style={styles.buttonText}>Copa do Brasil</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default function Home(props) {
    const { navigation } = props

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Selecione o campeonato que deseja acompanhar:</Text>
            <RenderizaCampeonato navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        padding: '10%'
    },
    mainView: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        borderRadius: 15,
        padding: '5%'
    },
    buttonText: {
        color: 'green',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})
