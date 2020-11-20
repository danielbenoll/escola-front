import mensagens from "./mensagens";

export default {
    nome: {
        required: mensagens.required, 
        maxLength: {value: 50, message: mensagens.maxLength + ' (50) caracteres'},
    },
    cpf: {
        required: mensagens.required,
    },
    matricula: {
        required: mensagens.required,
        maxLength: {value: 20, message: mensagens.maxLength + ' (20) caracteres'},
    },
    email: {
        required: mensagens.required,
        maxLength: {value: 100, message: mensagens.maxLength + ' (100) caracteres'},
    },
    telefone: {
        required: mensagens.required,
        minLength: {value: 14, message: mensagens.minLength + ' (14) caracteres'},
        maxLength: {value: 15, message: mensagens.maxLength + ' (15) caracteres'},
    },
    cep: {
        required: mensagens.required,
    },
    logradouro: {
        required: mensagens.required,
        maxLength: {value: 100, message: mensagens.maxLength + ' (100) caracteres'},
    },
    complemento: {
        // required: mensagens.required,
        maxLength: {value: 100, message: mensagens.maxLength + ' (100) caracteres'},
    },
    numero: {
        required: mensagens.required,
        maxLength: {value: 20, message: mensagens.maxLength + ' (20) caracteres'},
    },
    bairro: {
        // required: mensagens.required,
        maxLength: {value: 100, message: mensagens.maxLength + ' (100) caracteres'},
    },
}