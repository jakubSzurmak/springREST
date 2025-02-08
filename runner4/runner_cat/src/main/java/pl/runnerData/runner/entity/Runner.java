package pl.runnerData.runner.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.UUID;

@Getter
@SuperBuilder
@NoArgsConstructor
@Entity
@Table(name = "runners")
//@Document(collection = "runner")
public class Runner implements Serializable {
    @Id
    private UUID id;
    private String name;
    private String surname;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Override
    public String toString(){
        return id.toString() + " "
                + name + " " + surname
                + " " + birthDate.toString()
                + "\n";
    }
}
