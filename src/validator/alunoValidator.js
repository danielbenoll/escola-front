import mensagens from "./mensagens";

export default {
    nome: {
        required: mensagens.required, 
        maxLength: {value: 50, message: mensagens.max + ' (50) caracteres'},
        minLength: {value: 2, message: mensagens.min + ' (2) caracteres'},
    },
    cpf: {
        required: mensagens.required,
    },
    matricula: {
        required: mensagens.required,
        maxLength: {value: 20, message: mensagens.max + ' (20) caracteres'},
        minLength: {value: 5, message: mensagens.min + ' (5) caracteres'},
    },
    email: {
        maxLength: {value: 100, message: mensagens.max + ' (100) caracteres'},
    },
    telefone: {
        minLength: {value: 14, message: mensagens.minLength + ' (14) caracteres'},
        maxLength: {value: 15, message: mensagens.maxLength + ' (15) caracteres'},
    },
    cep: {
        required: mensagens.required,
        minLength: {value: 8, message: mensagens.minLength + ' (8) caracteres'},
        maxLength: {value: 8, message: mensagens.maxLength + ' (8) caracteres'},
    },
    uf: {
        required: mensagens.required,
    },
    municipio: {
        required: mensagens.required,
    },
    bairro: {
        maxLength: {value: 100, message: mensagens.max + ' (100) caracteres'},
    },
    logradouro: {
        maxLength: {value: 100, message: mensagens.max + ' (100) caracteres'},
    },
    complemento: {
        maxLength: {value: 100, message: mensagens.max + ' (100) caracteres'},
    },
    numero: {
        required: mensagens.required,
        maxLength: {value: 20, message: mensagens.max + ' (20) caracteres'},
    },
}