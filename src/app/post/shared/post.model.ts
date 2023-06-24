export class PostModel {
    public id: string;
    public title: string;
    public body: string;

    constructor(args: any) {
        const {
            id,
            title,
            body,
        } = args;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    getResposne() {
        return {
            id: this.id,
            title: this.title,
            body: this.body
        }
    }

}