import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
    
      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">{{title}} </h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      
      <!-- Modal body -->
      <div class="modal-body">
       Loan Applied Successfully !!!!!
      </div>
      
      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
      
    </div>
  </div>
</div>`,
 
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
