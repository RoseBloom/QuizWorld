import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs'
@Injectable()
export class ApiService{
    private selectedQuestion = new Subject<any>()
    questionSelected = this.selectedQuestion.asObservable()   
    
    constructor(private client: HttpClient ){}

  
   getQuestion(){
     return this.client.get('http://localhost:1066/api/questions')
   }
    postQuestion(question)
    {
        this.client.post('http://localhost:1066/api/questions',question).subscribe(res=>
            {console.log(res)
    })
}
    selectQuestion(question){
        console.log("select question called")
        this.selectedQuestion.next(question)
    }
}

    
