import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Shoes } from "../model/shoes";
import { ShoeForm } from "../model/shoe-form";
import { ShoeDetails } from "../model/shoe-details";

/**
 * Shoe management service. Calls REST endpoints.
 */
@Injectable()
export class ShoeService {

  /**
   * @param http HTTP client
   */
  constructor(private http: HttpClient) {}

  /**
   * Fetches single shoe.
   * @return shoe
   */
  getShoe(uuid: string): Observable<ShoeDetails> {
    return this.http.get<ShoeDetails>('/api/shoes/' + uuid);
  }

  /**
   * Fetches all shoes.
   * @return list of shoes
   */
  getShoes(): Observable<Shoes> {
    return this.http.get<Shoes>('/api/shoes');
  }

  /**
   * Fetches shoes of a single runner.
   * @param uuid runner's id
   */
  getRunnerShoes(uuid: string): Observable<Shoes> {
    return this.http.get<Shoes>('/api/runners/' + uuid + '/shoes');
  }

  /**
   * Removes single shoe.
   * @param uuid user's id
   */
  deleteShoe(uuid: string): Observable<any> {
    return this.http.delete('/api/shoes/' + uuid);
  }

  /**
   * Creates single shoe.
   * @param uuid shoe's owner's id
   * @param request request body
   */
  putShoe(uuid: string, request: ShoeForm): Observable<any> {
    return this.http.put('/api/runners/' + uuid + '/shoes/', request);
  }

  /**
   * Updates single shoe.
   * @param uuid shoe's id
   * @param request request body
   */
  patchShoe(uuid: string, request: ShoeForm): Observable<any> {
    console.log(request);
    return this.http.patch('/api/shoes/' + uuid, request);
  }
}
