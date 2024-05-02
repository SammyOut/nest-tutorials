export class Todo{
    id: number;
    title: string;
    until: Date;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, title: string, until: Date, content: string, author: string) {
        this.id = id;
        this.title = title;
        this.until = until;
        this.content = content;
        this.author = author;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}