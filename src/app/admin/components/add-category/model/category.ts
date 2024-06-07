import { Data } from 'src/types/examify-interface';

export class Category implements Data.Category {
  private _id: number;
  private _title: string;
  private _description: string;

    
  constructor(id: number, title: string, description: string) {
    this._id = id;
    this._title = title;
    this._description = description;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
}
