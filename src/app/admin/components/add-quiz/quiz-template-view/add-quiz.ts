export class QuizFormTemplate {
  private _id!: number;
  private _title!: string;
  private _description!: string;
  private _maxMarks!: string;
  private _numOfQuestions!: string;
  private _active!: boolean;
  private _categoryId!: number;

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

  public get maxMarks(): string {
    return this._maxMarks;
  }
  public set maxMarks(value: string) {
    this._maxMarks = value;
  }

  public get numOfQuestions(): string {
    return this._numOfQuestions;
  }
  public set numOfQuestions(value: string) {
    this._numOfQuestions = value;
  }

  public get active(): boolean {
    return this._active;
  }
  public set active(value: boolean) {
    this._active = value;
  }

  public get categoryId(): number {
    return this._categoryId;
  }
  public set categoryId(v: number) {
    this._categoryId = v;
  }
}

export class CategoryArray {
  cId!: number;
  title!: string;
}
