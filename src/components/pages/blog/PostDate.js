

const PostDate = ({ date }) => {
    

   
  
  return (
        new Date(date).toLocaleString("en-UK",{
            day:"2-digit",
            month: "long",
            year:"numeric",
        })
  );
};
export default PostDate;