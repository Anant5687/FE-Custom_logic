import { useState } from "react";

const NestedComments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState({});

  const addComments = () => {
    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      comment,
      replies: [],
      like: 0,
    };

    setComments((pre) => [newComment, ...pre]);
    setComment("");
  };

  const addLike = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id ? { ...comment, like: comment.like + 1 } : comment,
      ),
    );
  };

  const onDelete = (id) => {
    setComments((prevComments) => prevComments.filter((ele) => ele.id !== id));
  };

  const onAddReply = (i, value) => {
    setReplies({ ...value, [i]: value });
  };

  const addReplies = (i) => {
    const newReply = {
      reply: replies[i],
      id: Date.now(),
    };

    setComments((prevComments) =>
      prevComments.map((ele, ind) =>
        ind === i
          ? { ...ele, replies: [...ele?.replies, newReply] }
          : { ...ele },
      ),
    );
    onAddReply(i, "");
  };

  return (
    <div>
      <div>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add Comment"
        />
        <button onClick={addComments}>Add Comment </button>
      </div>
      {comments?.map((ele, i) => (
        <div
          key={ele?.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p>{ele?.comment}</p>

            <p onClick={() => addLike(ele?.id)} style={{ cursor: "pointer" }}>
              Like: {ele?.like}{" "}
            </p>

            <div>
              <input
                value={replies?.[i]}
                onChange={(e) => onAddReply(i, e.target.value)}
                placeholder="Add Reply"
              />
              <button onClick={() => addReplies(i)}>Add Reply </button>
            </div>

            {ele?.replies?.map((rep) => (
              <p key={rep.id}>{rep.reply}</p>
            ))}
          </div>

          <button onClick={() => onDelete(ele?.id)}>Delete comment</button>
        </div>
      ))}
    </div>
  );
};

export default NestedComments;
