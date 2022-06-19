import { http } from './config'

export default	{

    salvar:(pergunta)=>{
        delete pergunta.id
        return http.post('pergunta',pergunta);
    },

    atualizar:(pergunta)=>{
        return http.put('pergunta/' + pergunta.id ,pergunta);
    },

    listar:()=>{
        return http.get('pergunta')
    },

    apagar:(pergunta)=>{
        return http.delete('pergunta/' + pergunta.id, { data: pergunta })
    }
}