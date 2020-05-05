export interface Posts{
    
    data: {
        children:SinglePost[];
    };
    
}
export interface SinglePost{
    
    data: {
        title:string;
        thumbnail:string;
        permalink:string;
    };
}