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

    @Column(name = "status_code")
    private Integer status;
    public Status getStatus() {
        if (status == null) return null;
        return Status.valueOf(status); //Converte o código para enum
    }
}
