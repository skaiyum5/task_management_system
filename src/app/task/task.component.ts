import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITask } from '../task.model';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
	closeResult = '';
  taskForm!: FormGroup;
	constructor(private modalService: NgbModal,private fb: FormBuilder) {}
  @Input() data?:ITask;
  ngOnInit() {
    this.taskForm = this.fb.group({
      taskId:[''],
      title:['',[Validators.required,Validators.maxLength(100) ]],
      description:['',[Validators.required,Validators.maxLength(150) ]],
      Priority:['low',[Validators.required]],
      StartDate:['',[Validators.required]],
      endDate:['',[Validators.required]],
      status:['',[Validators.required]],
      assignedPerson:['',[Validators.required]],
      attachment:[''],
      subTask:[''],
    });
  }
  task_id=1;
  tasks:ITask[]=[];
  
  task:any;
  onSubmit(){
    // this.task.taskId=1;
    // console.log(this.taskForm.controls['title'].value)
    // this.task.title=this.taskForm.controls['title'].value
    
    // this.task.description=this.taskForm.controls['description'].value
    
    // this.task.Priority=this.taskForm.controls['Priority'].value
    // this.task.StartDate=this.taskForm.controls['StartDate'].value
    // this.task.endDate=this.taskForm.controls['endDate'].value
    this.taskForm.controls['taskId'].setValue(this.task_id);
    this.taskForm.controls['taskId'].updateValueAndValidity;
    this.task_id=this.task_id+1;

    let taskval=this.taskForm.value;
    this.tasks?.push(taskval)
    console.log(this.tasks)
    window.localStorage.setItem('Tasks',JSON.stringify(this.tasks))
  }

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
    
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  matcher = new MyErrorStateMatcher();
}


  /** Error when invalid control is dirty, touched, or submitted. */
  export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }
