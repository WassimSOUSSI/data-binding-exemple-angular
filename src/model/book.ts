export class Book {
    public name:string;
    public author:string;
    public pages:number;
    public contact:string;

    constructor(name:string, author:string, pages: number, contact:string){
        this.name=name;
        this.author=author;
        this.pages=pages;
        this.contact=contact
    }
}
