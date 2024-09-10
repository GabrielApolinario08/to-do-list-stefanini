package com.example.to_do_list_backend.mapper;

import com.example.to_do_list_backend.domain.Tarefa;
import com.example.to_do_list_backend.dto.TarefaResponseDTO;

public class TarefaMapper {

    public static TarefaResponseDTO tarefaToResponseDTO(Tarefa tarefa) {
        return new TarefaResponseDTO(tarefa.getId(), tarefa.getTitle(), tarefa.getDescription(), tarefa.getStatus());
    }
}
