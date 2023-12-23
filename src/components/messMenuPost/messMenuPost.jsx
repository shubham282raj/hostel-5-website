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

  const dayToday = daysList.indexOf(
    new Date(Date.now())
      .toLocaleDateString("en-US", { weekday: "long" })
      .toUpperCase()
  );

  return (
    <div className="messMenuPostContainer postContainer">
      <div className="messMenuPostTitle postTitle">{props.post.title}</div>
      <div className="messMenuPost">
        {daysList.map((day, index) => {
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{
                __html:
                  props.post[daysList[(index + dayToday) % daysList.length]],
              }}
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
