import { Component, OnInit } from '@angular/core';
import {CloudForm} from '../../shared/models/cloud-form.model';
import {WorkspaceService} from './workspace.service';
import {Router} from '@angular/router';
import {CommonUtilsService} from '../../shared/services/common-utils.service';
declare var $: any;

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
  providers: [WorkspaceService]
})
export class WorkspaceComponent implements OnInit {
  search: string;
  showBuildForm: boolean;
  cloudForms: CloudForm[];
  cloudForm: CloudForm;

  constructor(private workspaceService: WorkspaceService,
              private router: Router,
              private utils: CommonUtilsService) {
    this.showBuildForm = false;
    this.cloudForm = new CloudForm();
    this.cloudForms = [];
    this.utils.store('userId', 'ashish'); // TODO: need to remove this once auth server is setup
  }

  ngOnInit() {
    this.workspaceService.getForms(this.utils.retrieve('userId'))
      .subscribe((forms) => {
        if (forms._embedded) {
          this.cloudForms = forms._embedded.userForms;
        }
      });
  }

  /*This method search form in available forms*/
  doSearch(input: string): void {
    this.search = input;
  }

  /*This method shows build form tile*/
  showBuildFormTile(): void {
    this.showBuildForm = true;
  }

  /*This method hides build form tile*/
  hideBuildFormTile(): void {
    this.showBuildForm = false;
  }

  /*This method save form and redirect to add questions into it*/
  buildCloudForm(isFormValid: boolean): void {
    if (isFormValid) {
      this.cloudForm.userId = this.utils.retrieve('userId');
      this.cloudForm.language = this.cloudForm.language || 'English';
      this.cloudForms.push(this.cloudForm);
      this.utils.showLoader(this.cloudForms.length - 1);
      this.hideBuildFormTile();
      this.workspaceService.saveForm(this.cloudForm)
        .subscribe((form) => {
          if (form.id) {
            this.utils.hideLoader(this.cloudForms.length - 1);
            this.openForm(form.id);
          }
        });
    }
  }

  /*This method open form by formId*/
  openForm(formId: string): void {
    if (formId) {
      this.router.navigate(['workspace/forms', formId, 'questions']);
    }
  }
}
