package pl.runnerData.function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import pl.runnerData.initialize.DataInitializator;
import pl.runnerData.runner.repository.RunnerBackupRepository;
import pl.runnerData.runner.repository.RunnerRepository;



@Component
public class CommandRunner implements CommandLineRunner {
    private final RunnerRepository runnerRepository;
    private final RunnerBackupRepository runnerBackupRepository;

    @Autowired
    public CommandRunner(RunnerRepository runnerRepository, RunnerBackupRepository runnerBackupRepository) {
        this.runnerRepository = runnerRepository;
        this.runnerBackupRepository = runnerBackupRepository;
    }

    @Override
    public void run(String... args){
        DataInitializator.dataInitializator(runnerRepository, runnerBackupRepository);
    }
}
