import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import RenderizaRodada from '../components/RenderizaRodada'
import axios from 'axios'
import { API_FUTEBOL } from '../config/config.json'

export default function FaseXCopaBR(props) {
    const { route } = props
    const { fase_id } = route.params
    const { AUTH_LIVE_API_FUTEBOL: API_SECRET } = API_FUTEBOL
    
    const [rodadasFase, setRodadasFase] = useState()

    const getRodadasFase = async () => {
        const resultado = await axios.get(`https://api.api-futebol.com.br/v1/campeonatos/2/fases/${fase_id}`, {
            headers: { 'Authorization': `Bearer ${API_SECRET}` }
        }).then(response => {
            return response.data
        }).catch(error => {
            alert('Ocorreu um erro ao buscar os dados. Retorno recebido: "' + error.message + '"')
        })

        const { chaves } = resultado

        setRodadasFase(chaves)
    }

    useEffect(() => {
        getRodadasFase()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FlatList
                    data={rodadasFase}
                    keyExtractor={rodada => rodada.partida_ida.partida_id.toString()}
                    renderItem={item => <RenderizaRodada data={item} />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        padding: '10%'
    },
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: '5%',
        borderRadius: 10
    }
})
