import mensagens from "./mensagens";

export default {
    nome: {
        required: mensagens.required, 
        maxLength: {value: 50, message: mensagens.max + ' (50) caracteres'},
        minLength: {value: 2, message: mensagens.min + ' (2) caracteres'},
    },
    tipo: {
        required: mensagens.required, 
        maxLength: {value: 1, message: mensagens.max + ' (1) caracteres'},
    },
}