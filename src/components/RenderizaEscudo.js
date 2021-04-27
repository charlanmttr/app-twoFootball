import React from 'react'
import { Image } from 'react-native'
import { SvgUri } from 'react-native-svg'

    /* Recebe a URL do escudo de um time via props, verifica a extensão do arquivo que será retornado da URL (SVG ou PNG) 
       e renderiza de acordo com seu tipo.

       Exemplos de URLs recebidas:     
          https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999cada993f.svg
          https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/60480c0d2c91e.png
          https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/60480c0e8580a.png
          https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/60480c20b2ede.svg
          https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d8bb1c90.png
          https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/60480c128657e.png

    */

export default function RenderizaEscudo(props) {
    const { url_escudo } = props
    const ext_escudo = url_escudo.slice(-6).split('.')[1]

    if (ext_escudo === 'svg') {
        return (
            <SvgUri
                width={100}
                height={100}
                uri={url_escudo}
            />
        )
    } else {
        return (
            <Image
                width={100}
                height={100}
                source={{ uri: url_escudo }}
                resizeMode={'cover'}
            />
        )
    }
}
