import {Component, Input, ViewChild} from "@angular/core";
import {BuildConfigs} from "../../../model/buildconfig.model";
import {BuildConfigDeleteDialog} from "../../buildconfig/delete-dialog/delete-dialog.buildconfig.component";

@Component({
  selector: 'fabric8-pipelines-list',
  templateUrl: './list.pipeline.component.html',
  styleUrls: ['./list.pipeline.component.scss'],
})
export class PipelinesListComponent {

  @Input() pipelines: BuildConfigs;

  @Input() loading: boolean;

  @ViewChild(BuildConfigDeleteDialog) deleteDialog: BuildConfigDeleteDialog;

  openDeleteDialog(deleteBuildConfigModal, pipeline) {
    this.deleteDialog.modal = deleteBuildConfigModal;
    this.deleteDialog.buildconfig = pipeline;
    deleteBuildConfigModal.open();
  }

}
