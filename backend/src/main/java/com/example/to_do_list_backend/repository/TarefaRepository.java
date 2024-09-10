package com.example.to_do_list_backend.repository;

import com.example.to_do_list_backend.domain.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}
