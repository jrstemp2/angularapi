


// export interface Posts{
//     data: MainData
// }

// export interface MainData {
//     children: SinglePost[];
// }

// export interface SinglePost{
//     data:SubData;
// }

// export interface SubData{
//     title:string;
//     thumbnail:string;
//     permalink:string;
// }

export interface Posts {
    data: Data1;
    
}

export interface Data1{
    children:Children[];
}

export interface Children{
    data:SinglePost;
}

export interface SinglePost{
    
    title:string;
    thumbnail:string;
    permalink:string;
}