package pl.runnerData.function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import pl.runnerData.initialize.DataInitializator;
import pl.runnerData.runner.service.DefaultRunnerService;
import pl.runnerData.shoe.service.DefaultShoeService;

import java.util.ArrayList;
import java.util.List;

@Component
public class CommandRunner implements CommandLineRunner {

    @Autowired
    public CommandRunner(DefaultRunnerService defaultRunnerService,
                         DefaultShoeService defaultShoeService) {

        List<Object> container = new ArrayList<>();
        List<Object> shoeList = new ArrayList<>();
        DataInitializator.dataInitializator(
                container,
                shoeList,
                defaultRunnerService,
                defaultShoeService
        );
    }

    @Override
    public void run(String... args){

    }
}
