import { http } from './config'

export default {

    listar:() => {
        return http.get('pergunta');
    },
    salvar:(pergunta) => {
       return http.post('pergunta',pergunta)
    },
    atualizar:(pergunta) => {
        return http.put('pergunta',pergunta)
    },
    apagar: (pergunta) =>{
        return http.delete('pergunta', {data : pergunta})

    }
}