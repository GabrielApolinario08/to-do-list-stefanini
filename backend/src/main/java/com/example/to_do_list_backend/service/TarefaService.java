package com.example.to_do_list_backend.service;

import com.example.to_do_list_backend.domain.Tarefa;
import com.example.to_do_list_backend.dto.TarefaResponseDTO;
import com.example.to_do_list_backend.mapper.TarefaMapper;
import com.example.to_do_list_backend.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TarefaService {
    @Autowired
    private TarefaRepository repository;

    public List<TarefaResponseDTO> findAll() {
        return repository.findAll().stream().map(TarefaMapper::tarefaToResponseDTO).toList();
    }
}