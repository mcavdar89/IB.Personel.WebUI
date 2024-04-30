import { HttpClient } from "@angular/common/http";
import { Personel } from "../models/personel.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class PersonelService {
    constructor(private client: HttpClient) { }
    
    
    getPersonelList(): Observable<Personel[]> {
        return this.client.get<Personel[]>("http://localhost:5200/api/personel/list");
    }

    // getPersonelList2(list: Personel[]) {
    //     this.client.get<Personel[]>("http://localhost:5200/api/personel/get").subscribe(
    //         resp => { 
    //             for (let i = 0; i < resp.length; i++) {
    //                 list.push(resp[i]);
    //             }
    //          }
    //     )
    // }


}