package com.example.to_do_list_backend.controller;

import com.example.to_do_list_backend.domain.Tarefa;
import com.example.to_do_list_backend.domain.enums.Status;
import com.example.to_do_list_backend.repository.TarefaRepository;
import com.example.to_do_list_backend.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/tarefas")
public class TarefaController {
    @Autowired
    private TarefaService service;

    @Autowired
    private TarefaRepository repository;

    @GetMapping
    public ResponseEntity<List<Tarefa>> findAll() {
        return ResponseEntity.ok().body(service.findAll());
    }
}
