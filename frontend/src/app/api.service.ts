import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class ApiService{
    constructor(private client: HttpClient ){}
    postQuestion(question)
    {
        this.client.post('http://localhost:1066/api/questions',question).subscribe(res=>
            {console.log(res)
    })
    }
}