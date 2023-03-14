export default interface IPost {
  id: string;
  content: string;
  fileUrl: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  userId: string;
}
