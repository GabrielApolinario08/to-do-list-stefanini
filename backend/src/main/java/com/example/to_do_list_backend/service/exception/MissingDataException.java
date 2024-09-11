package com.example.to_do_list_backend.service.exception;

public class MissingDataException extends RuntimeException{
    public MissingDataException(String msg) {
        super(msg);
    }
}
