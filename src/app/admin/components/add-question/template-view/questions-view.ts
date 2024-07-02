export class QuestionTemplate {
    private _quesId!: number;
    private _content!: number;
    private _image!: string;
    private _option1!: string;
    private _option2!: string;
    private _option3!: string;
    private _option4!: string;
    private _answer!: string;
    private _quizId!: number;

    get quesId(): number {
        return this._quesId;
    }

    set quesId(value: number) {
        this._quesId = value;
    }

    get content(): number {
        return this._content;
    }

    set content(value: number) {
        this._content = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get option1(): string {
        return this._option1;
    }

    set option1(value: string) {
        this._option1 = value;
    }

    get option2(): string {
        return this._option2;
    }

    set option2(value: string) {
        this._option2 = value;
    }

    get option3(): string {
        return this._option3;
    }

    set option3(value: string) {
        this._option3 = value;
    }

    get option4(): string {
        return this._option4;
    }

    set option4(value: string) {
        this._option4 = value;
    }

    get answer(): string {
        return this._answer;
    }

    set answer(value: string) {
        this._answer = value;
    }


    public get quizId(): number {
        return this._quizId;
    }
    public set quizId(v: number) {
        this._quizId = v;
    }

}
