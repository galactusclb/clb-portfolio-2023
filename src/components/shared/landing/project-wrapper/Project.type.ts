export interface Project {
    title: string;
    targetId?:string;
    isActive?: boolean;
    type: 'Web Development' | 'UI/UX Design' | 'Full-Stack Development'
    description ?:string;
    imageList?: string[]
}
