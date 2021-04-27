import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, Button, Image } from 'react-native'
import axios from 'axios'
import { API_FUTEBOL } from '../config/config.json'

function FaseComponent(props) {
    const { nome, fase_id, status, tipo } = props.data.item;
    const { navigation } = props;

    return (
        <>
            <View style={{ marginTop: 5, marginBottom: 5 }}>
                <Button
                    title={nome}
                    onPress={() => navigation.navigate('Fases da Copa Do Brasil', { nome, fase_id })}
                    disabled={(status === 'finalizado') ? false : true} /* disabled={(status === 'finalizado') ? false : (status === 'andamento') ? false : true} */
                    color='green' />
            </View>
        </>
    )
}

export default function Copa(props) {
    const { navigation } = props
    const { AUTH_LIVE_API_FUTEBOL: API_SECRET } = API_FUTEBOL

    const [dadosFase, setDadosFase] = useState()

    const getFasesDaCopa = async () => {
        const fases = await axios.get("https://api.api-futebol.com.br/v1/campeonatos/2/fases",
            {
                headers: { 'Authorization': `Bearer ${API_SECRET}` }
            }).then(response => {
                return response.data
            }).catch(error => {
                alert('Ocorreu um erro ao buscar os dados. Retorno recebido: "'+ error.message +'"')
            });
        
        setDadosFase(fases)
    }

    useEffect(() => {
        getFasesDaCopa()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Image
                    source={require('../img/logoCopaDoBrasil.png')}
                    style={{ width: '100%', height: 200 }}
                    resizeMode="contain"
                />
                <FlatList
                    data={dadosFase}
                    renderItem={item => <FaseComponent navigation={navigation} data={item} />}
                    keyExtractor={fase => fase.fase_id.toString()}
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
