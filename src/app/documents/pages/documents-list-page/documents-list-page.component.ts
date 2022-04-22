import {Component, OnInit} from '@angular/core';
import {DocumentApiService} from "../../services/document-api-service";
import {CreateDocument} from "../../models/create-document";
import {Document} from "../../models/document";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {MatDialog} from '@angular/material/dialog';
import {CreateBillsModalComponent} from "../../../bills/components/create-bills-modal/create-bills-modal.component";
import {DirectoryEnum} from "../../models/directory-enum";
import {DocumentStatus} from "../../models/document-status";
import {CreateDocumentModalComponent} from "../../components/create-document-modal/create-document-modal.component";

@Component({
  selector: 'app-documents-list-page',
  templateUrl: './documents-list-page.component.html',
  styleUrls: ['./documents-list-page.component.css']
})
export class DocumentsListPageComponent implements OnInit {
  add = faPlus;

  public documents: Document[] = [];
  //   {
  //     document_id: 1,
  //     directory: DirectoryEnum.act,
  //     filename: "name.docx",
  //     status: DocumentStatus.signed,
  //     createdAt: "2022-04-17T18:10:18.096Z",
  //     updatedAt: "2022-04-17T18:10:18.096Z"
  //   },
  //   {
  //     document_id: 1,
  //     directory: DirectoryEnum.act,
  //     filename: "name.docx",
  //     status: DocumentStatus.signed,
  //     createdAt: "2022-04-17T18:10:18.096Z",
  //     updatedAt: "2022-04-17T18:10:18.096Z"
  //   },
  //   {
  //     document_id: 1,
  //     directory: DirectoryEnum.act,
  //     filename: "name.docx",
  //     status: DocumentStatus.signed,
  //     createdAt: "2022-04-17T18:10:18.096Z",
  //     updatedAt: "2022-04-17T18:10:18.096Z"
  //   },
  //   {
  //     document_id: 1,
  //     directory: DirectoryEnum.act,
  //     filename: "name.docx",
  //     status: DocumentStatus.signed,
  //     createdAt: "2022-04-17T18:10:18.096Z",
  //     updatedAt: "2022-04-17T18:10:18.096Z"
  //   },
  //   {
  //     document_id: 1,
  //     directory: DirectoryEnum.act,
  //     filename: "name.docx",
  //     status: DocumentStatus.signed,
  //     createdAt: "2022-04-17T18:10:18.096Z",
  //     updatedAt: "2022-04-17T18:10:18.096Z"
  //   }
  // ];
  constructor(private readonly _documentApiService: DocumentApiService,
    private readonly _dialog: MatDialog) { }

  public ngOnInit(): void {
    this.loadDocuments();
  }

  openDialog() {
    const dialogRef = this._dialog.open(CreateDocumentModalComponent, {
      data: {
      },
    });

    dialogRef.afterClosed().subscribe((createBill: CreateDocument) => {
      if (createBill === undefined) {
        return;
      }
      this.createDocument(createBill);
    });

  }

  public createDocument(createDocument: CreateDocument): void {
    this._documentApiService.create(createDocument).subscribe(() => {
      this.loadDocuments();
    })
  }

  private  loadDocuments(): void {
    this._documentApiService.getDocuments().subscribe((documents: Document[]) => {
      this.documents = documents;
    })
  }
}
