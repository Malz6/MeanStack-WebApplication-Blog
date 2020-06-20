export interface Post
{
   id: string;//automatically created by mongoose
   title: string;
   content: string;
   imagePath: string;
   creator: string;
}
// can't be instantiated
