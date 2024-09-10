package com.example.to_do_list_backend.controller;
import com.example.to_do_list_backend.dto.TarefaRequestDTO;
import com.example.to_do_list_backend.dto.TarefaResponseDTO;
import com.example.to_do_list_backend.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/tarefas")
public class TarefaController {
    @Autowired
    private TarefaService service;

    //Endpoints:

    //Retorna todas as tarefas existentes
    @GetMapping //Mapeia as requisições GET para este método
    public ResponseEntity<List<TarefaResponseDTO>> findAll() {
        return ResponseEntity.ok().body(service.findAll());
    }

    //Retorna apenas uma tarefa de acordo com o id
    @GetMapping(value = "/{id}") //Mapeia as requisições GET com o id passado como parâmetro para este método
    public ResponseEntity<TarefaResponseDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.findById(id));
    }

    //Cria uma nova tarefa
    @PostMapping //Mapeia as requisições POST para este método
    public ResponseEntity<TarefaResponseDTO> insert(@RequestBody TarefaRequestDTO requestDTO) {
        TarefaResponseDTO responseDTO = service.insert(requestDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(responseDTO.id()).toUri();//Constrói a URI do novo recurso criado
        return ResponseEntity.created(uri).body(responseDTO);
    }

    //Deleta uma tarefa de acordo com o id
    @DeleteMapping(value = "/{id}") //Mapeia as requisições DELETE para o método
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    //Atualiza uma tarefa
    @PutMapping(value = "/{id}") //Mapeia as requisições PUT com o id passado como parâmetro para este método
    public ResponseEntity<TarefaResponseDTO> update(@PathVariable Long id, @RequestBody TarefaRequestDTO requestDTO) {
        TarefaResponseDTO responseDTO = service.update(id, requestDTO);
        return ResponseEntity.ok().body(responseDTO);
    }
}
