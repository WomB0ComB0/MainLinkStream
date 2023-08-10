export type Result = {
  id: string;
  name: string;
};

type Id = string | number;
export type Data = {
    id: Id;
    name: string;
    link: string;
    image?: string | any;
    description: string;
    featured: boolean;
}