import{Injectable} from '@angular/core'
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Demo } from '../../Model/demo.model';
const headerOption={
headers:new HttpHeaders({'Content-Type':'application/json'})


};
@Injectable()

export class DemoService{


    demoUrl= 'http://localhost:3000/Demo';

   currentEmployee : Demo = {
    id:null,
   firstname:'',
  Lastname:'',
 designation:'',
 contact :null,

 address:''
 }
    constructor(

 
        private http:HttpClient
    )
    {}

    getAllEmployees():Observable<Demo[]>{

     return this.http.get<Demo[]>(this.demoUrl,headerOption);

    }


    createEmployee(emp: Demo): Observable<Demo> {
        return this.http.post<Demo>(this.demoUrl, emp, headerOption);
      }
    deleteEmployee(id:number):Observable<Demo>{

        return this.http.delete<Demo>(this.demoUrl + '/'+id,headerOption);
        
            }


            updateEmployee(demo: Demo): Observable<Demo> {
                return this.http.put<Demo>(this.demoUrl + '/' + demo.id, demo, headerOption);
              }
}