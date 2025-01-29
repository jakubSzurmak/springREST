import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Runners } from "../model/runners";
import { RunnerDetails } from "../model/runner-details";
import { RunnerForm } from "../model/runner-form";

/**
 * Runner management service. Calls REST endpoints.
 */
@Injectable()
export class RunnerService {

  /**
   * @param http HTTP client
   */
  constructor(private http: HttpClient) {

  }

  /**
   * Fetches all runners.
   *
   * @return list of runners
   */
  getRunners(): Observable<Runners> {
    return this.http.get<Runners>('/api/runners');
  }

  /**
   * Fetches single runners.
   * @param uuid runner's id
   * @return single runners
   */
  getRunner(uuid: string): Observable<RunnerDetails> {
    return this.http.get<RunnerDetails>('/api/runners/' + uuid);
  }

  /**
   * Removes single runner.
   *
   * @param uuid runner's id
   */
  deleteRunner(uuid: string): Observable<any> {
    return this.http.delete('/api/runners/' + uuid);
  }

  /**
   * Updates single runner.
   *
   * @param uuid runner's id
   * @param request request body
   */
  putRunner(uuid: string, request: RunnerForm): Observable<any> {
    return this.http.put('/api/runners/' + uuid, request);
  }

}
