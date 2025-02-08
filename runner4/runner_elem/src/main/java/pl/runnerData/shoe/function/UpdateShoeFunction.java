package pl.runnerData.shoe.function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pl.runnerData.shoe.dto.PutShoeRequest;
import pl.runnerData.shoe.entity.Shoe;
import pl.runnerData.shoe.service.DefaultShoeService;

import java.util.UUID;
import java.util.function.BiFunction;

@Component
public class UpdateShoeFunction implements BiFunction<UUID, PutShoeRequest, Shoe> {
    private final DefaultShoeService defaultShoeService;

    @Autowired
    public UpdateShoeFunction(DefaultShoeService defaultShoeService) {
        this.defaultShoeService = defaultShoeService;
    }

    @Override
    public Shoe apply(UUID uuid, PutShoeRequest request) {

        return Shoe.builder()
                .shoe_id(uuid)
                .brandName(request.getBrandName())
                .model(request.getModel())
                .color(request.getColor())
                .size(request.getSize())
                .owner(defaultShoeService.findById(uuid).get().getOwner())
                .build();

    }
}
