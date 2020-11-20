import mensagens from "./mensagens";

export default {
    nome: {
        required: mensagens.required, 
        maxLength: {value: 50, message: mensagens.max + ' (50) caracteres'},
    },
    data_inicio: {
        required: mensagens.required, 
        minLength: {value: 10, message: mensagens.min},
    },
    data_fim: {
        required: mensagens.required, 
        minLength: {value: 10, message: mensagens.min},
    },
}