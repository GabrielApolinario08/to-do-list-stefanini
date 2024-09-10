package com.example.to_do_list_backend.domain.enums;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

@Getter
public enum Status {
    NAO_INICIADO(1),
    EM_ANDAMENTO(2),
    CONCLUIDO(3);

    private int code;
    private Status(int code) {
        this.code = code;
    }

    public static Status valueOf(int code) {
        for (Status s : Status.values()) {
            if (s.getCode() == code) {
                return s;
            }
        }
        throw new IllegalArgumentException("Código inválido.");
    }
}
