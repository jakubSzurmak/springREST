package pl.runnerData.shoe.entity;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import pl.runnerData.runner.entity.Runner;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.experimental.SuperBuilder;
import java.text.DecimalFormat;
import java.io.Serializable;
import java.util.UUID;


@SuperBuilder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "shoes")
//@Document(collection = "getShoeResponse")
public class Shoe implements Serializable {
    @Id
    private UUID shoe_id;

    @Setter
    @Column(name = "brand_name")
    private String brandName;
    @Setter
    private String model;
    @Setter
    private String color;
    @Setter
    private double size;

    @ManyToOne
    @JoinColumn(name = "id")
    private Runner owner;

    private static final DecimalFormat df = new DecimalFormat("0.0");

    @Override
    public String toString(){
        return shoe_id + " " + model + " " + color + " " + df.format(size) + "\n" + owner.getId();
    }
}
