import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function RenderizaRodada(props) {
    const { partida_ida } = props.data.item
    const { time_mandante, time_visitante } = partida_ida

    return (
        <>
            <View flex={1} flexDirection={'row'} margin={5} padding={5} >
                <View width={'75%'} borderRightWidth={0.5} borderRightColor={'gray'}>
                    <View flex={1} flexDirection={'row'} padding={5}>
                        <View width={'15%'}>
                            <Image source={require('../img/logoEquipe1.png')} style={styles.imagemEquipe} />
                        </View>
                        <View width={'70%'}>
                            <Text style={styles.textEquipe}>{time_mandante.nome_popular}</Text>
                        </View>
                        <View width={'15%'}>
                            <Text style={styles.textPlacar}>{partida_ida.placar_mandante}</Text>
                        </View>
                    </View>
                    <View flex={1} flexDirection={'row'} padding={5}>
                        <View width={'15%'}>
                            <Image source={require('../img/logoEquipe1.png')} style={styles.imagemEquipe} />
                        </View>
                        <View width={'70%'}>
                            <Text style={styles.textEquipe}>{time_visitante.nome_popular}</Text>
                        </View>
                        <View width={'15%'}>
                            <Text style={styles.textPlacar}>{partida_ida.placar_visitante}</Text>
                        </View>
                    </View>
                </View>
                <View width={'25%'} justifyContent={'center'}>
                    <TouchableOpacity onPress={() => alert('Sessão não implementada.')}>
                        <Text style={styles.buttonText}>Mostrar partida</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View borderBottomWidth={0.5} borderBottomColor={'gray'} />
        </>
    )
}

const styles = StyleSheet.create({
    textPlacar: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
    },
    textEquipe: {
        textAlign: 'left',
        fontSize: 13,
    },
    imagemEquipe: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold'
    }
})
