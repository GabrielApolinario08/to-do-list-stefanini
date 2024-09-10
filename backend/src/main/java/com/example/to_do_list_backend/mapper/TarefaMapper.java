package com.example.to_do_list_backend.mapper;

import com.example.to_do_list_backend.domain.Tarefa;
import com.example.to_do_list_backend.dto.TarefaRequestDTO;
import com.example.to_do_list_backend.dto.TarefaResponseDTO;

public class TarefaMapper {

    //Transforma um objeto Tarefa em TarefaResponseDTO
    public static TarefaResponseDTO tarefaToResponseDTO(Tarefa tarefa) {
        return new TarefaResponseDTO(tarefa.getId(), tarefa.getTitle(), tarefa.getDescription(), tarefa.getStatus());
    }

    //Transforma um objeto TarefaRequestDTO em Tarefa
    public static Tarefa requestDTOToTarefa(TarefaRequestDTO requestDTO) {
        return new Tarefa(null, requestDTO.title(), requestDTO.description(), requestDTO.status());
    }
}
