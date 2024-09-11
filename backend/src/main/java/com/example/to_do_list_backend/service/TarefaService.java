package com.example.to_do_list_backend.service;
import com.example.to_do_list_backend.domain.Tarefa;
import com.example.to_do_list_backend.dto.TarefaRequestDTO;
import com.example.to_do_list_backend.dto.TarefaResponseDTO;
import com.example.to_do_list_backend.mapper.TarefaMapper;
import com.example.to_do_list_backend.repository.TarefaRepository;
import com.example.to_do_list_backend.service.exception.MissingDataException;
import com.example.to_do_list_backend.service.exception.ResourceNotFoundException;
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

    public TarefaResponseDTO findById(Long id) {
        return TarefaMapper.tarefaToResponseDTO(repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id)));
    }

    public TarefaResponseDTO insert(TarefaRequestDTO requestDTO) {
        checksMissingData(requestDTO);
        return TarefaMapper.tarefaToResponseDTO(repository.save(TarefaMapper.requestDTOToTarefa(requestDTO)));
    }

    public void deleteById(Long id) {
        if (!repository.existsById(id)) throw new ResourceNotFoundException(id);
        repository.deleteById(id);
    }

    public TarefaResponseDTO update(Long id, TarefaRequestDTO requestDTO) {
        checksMissingData(requestDTO);
        Tarefa tarefa = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));
        updateData(tarefa, requestDTO);
        repository.save(tarefa);
        return TarefaMapper.tarefaToResponseDTO(tarefa);
    }

    //Inclui as novas informações nos métodos
    private void updateData(Tarefa tarefa, TarefaRequestDTO requestDTO) {
        tarefa.setTitle(requestDTO.title());
        tarefa.setDescription(requestDTO.description());
        tarefa.setStatus(requestDTO.status().getCode());
    }

    //Lança uma exceção caso algum campo não seja preenchido
    private void checksMissingData(TarefaRequestDTO requestDTO) {
        if (requestDTO.title() == null || requestDTO.description() == null || requestDTO.status() == null)
            throw new MissingDataException("Todos os campos devem ser preenchidos.");
    }
}
