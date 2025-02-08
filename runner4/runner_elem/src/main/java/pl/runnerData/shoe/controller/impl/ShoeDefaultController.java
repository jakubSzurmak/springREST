package pl.runnerData.shoe.controller.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import pl.runnerData.shoe.controller.api.ShoeController;
import pl.runnerData.shoe.dto.GetShoeResponse;
import pl.runnerData.shoe.dto.GetShoesResponse;
import pl.runnerData.shoe.dto.PutShoeRequest;
import pl.runnerData.shoe.function.RequestToShoeFunction;
import pl.runnerData.shoe.function.ShoeToResponseFunction;
import pl.runnerData.shoe.function.ShoesToResponseFunction;
import pl.runnerData.shoe.function.UpdateShoeFunction;
import pl.runnerData.shoe.service.DefaultShoeService;

import java.util.UUID;

@RestController
public class ShoeDefaultController implements ShoeController {
    private final DefaultShoeService service;
    private final ShoeToResponseFunction shoeToResponse;
    private final ShoesToResponseFunction shoesToResponse;
    private final RequestToShoeFunction requestToShoe;
    private final UpdateShoeFunction updateShoe;
    private static final Logger logger = LoggerFactory.getLogger(ShoeDefaultController.class);
    @Value("${eureka.instance.instance-id}") private String instanceId;

    @Autowired
    public ShoeDefaultController(
            DefaultShoeService service,
            ShoeToResponseFunction shoeToResponse,
            ShoesToResponseFunction shoesToResponse,
            RequestToShoeFunction requestToShoe,
            UpdateShoeFunction updateShoe
    ){
        this.service = service;
        this.shoeToResponse = shoeToResponse;
        this.shoesToResponse = shoesToResponse;
        this.requestToShoe = requestToShoe;
        this.updateShoe = updateShoe;
    }


    @Override
    public GetShoesResponse getShoes() {
        return shoesToResponse.apply(service.findAll()) ;
    }

    @Override
    public GetShoeResponse getShoe(UUID id) {
        return service.findById(id).map(shoeToResponse)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @Override
    public GetShoesResponse findRunnerShoes(UUID id) {
        return shoesToResponse.apply(service.findAllByOwnerId(id));
    }

    @Override
    public void putShoe(UUID ownerId, PutShoeRequest request) {
        service.create(requestToShoe.apply(ownerId, request));
    }

    @Override
    public void patchShoe(UUID shoe_id, PutShoeRequest request) {
        service.create(updateShoe.apply(shoe_id, request));
    }

    @Override
    public void deleteShoe(UUID id) {
        logger.info("Handled by instance: {}", instanceId);
        service.findById(id)
                .ifPresentOrElse(
                        shoe -> service.delete(id),
                        ()->{
                            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
                        }
                );
    }
}
