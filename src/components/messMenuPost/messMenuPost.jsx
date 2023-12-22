import "./messMenuPost.css";

export const MessMenuPost = (props) => {
  //   const [openPost, setOpenPost] = useState(false)
  const daysList = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  return (
    <div className="messMenuPostContainer postContainer">
      <div className="messMenuPostTitle postTitle">{props.post.title}</div>
      <div className="messMenuPost">
        {daysList.map((day, index) => {
          console.log(day);
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: props.post[day] }}
            />
          );
        })}
      </div>
      {/* <div onClick={() => setOpenPost(!openPost)} className="toggleRead">
        {openPost ? "Read Less" : "Read More"}
      </div> */}
      {/* <div className="footer">@{props.post.username}</div> */}
    </div>
  );
};
