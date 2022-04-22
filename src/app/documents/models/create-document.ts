import {DocumentStatus} from "./document-status";
import {DirectoryEnum} from "./directory-enum";

export class CreateDocument {
  // @ts-ignore
  public filename: string;
  // @ts-ignore
  public status: DocumentStatus;
  // @ts-ignore
  public directory: DirectoryEnum;
}
