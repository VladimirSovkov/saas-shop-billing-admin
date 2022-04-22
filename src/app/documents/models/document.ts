import {DirectoryEnum} from "./directory-enum";
import {DocumentStatus} from "./document-status";

export class Document {
  // @ts-ignore
  public document_id: nuber;
  // @ts-ignore
  public directory: DirectoryEnum;
  // @ts-ignore
  public filename: string;
  // @ts-ignore
  public status: DocumentStatus;
  // @ts-ignore
  public createdAt: string;
  // @ts-ignore
  public updatedAt: string;
}
