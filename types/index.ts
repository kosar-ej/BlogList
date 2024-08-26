export interface ParamsType {
    params: {
        id: number | string
    }
}

export interface BlogType {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export interface CreateBlogType {
    title: string;
    body: string;
    userId: number;
}

export interface MyButtonType {
    onClick: () => void,
    text: string,
    loading?: boolean,
    type?: string
}

export interface MyInputType {
    type?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    label?: boolean,
    text?: string,
    defaultValue?: string,
    name?:string
}

export interface CustomModalType {
    isOpen: boolean,
    onClose: () => void,
    title: string,
    description: string,
    onOk: () => void,
    loading: boolean
}

export interface IconcardType {
    src: any,
    type?: string,
    id: number | string
}