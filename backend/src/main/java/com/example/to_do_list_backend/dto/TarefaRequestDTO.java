package com.example.to_do_list_backend.dto;

import com.example.to_do_list_backend.domain.enums.Status;

public record TarefaRequestDTO (String title, String description, Status status) {
}
