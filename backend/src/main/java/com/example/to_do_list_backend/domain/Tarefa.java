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

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(name = "status_code", nullable = false)
    private Integer status;
    public Status getStatus() {
        return Status.valueOf(status); //Converte o código para enum
    }
}
