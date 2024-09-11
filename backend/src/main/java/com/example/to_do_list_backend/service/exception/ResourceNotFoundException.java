package com.example.to_do_list_backend.service.exception;

public class ResourceNotFoundException extends RuntimeException{
    public ResourceNotFoundException(Object id) {
        super("Recurso não encontrado. Id: " + id);
    }
}
