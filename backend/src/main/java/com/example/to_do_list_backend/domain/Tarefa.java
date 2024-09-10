package com.example.to_do_list_backend.domain;

import com.example.to_do_list_backend.domain.enums.Status;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tarefas")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Tarefa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private Status status;
}
