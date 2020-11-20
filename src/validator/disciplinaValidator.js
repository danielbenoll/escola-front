import mensagens from "./mensagens";

export default {
    nome: {
        required: mensagens.required, 
        maxLength: {value: 50, message: mensagens.max + ' (50) caracteres'},
        minLength: {value: 2, message: mensagens.min + ' (2) caracteres'},
    },
    curso_id: {
        required: mensagens.required, 
    },
}