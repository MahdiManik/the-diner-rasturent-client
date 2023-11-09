import { useState } from "react";
import useAuth from "../Hooks/UseAuth";

const Comment = () => {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const commentsValue = form.commentsValue.value;
    console.log(name, email, commentsValue);

    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const amPm = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
      hours -= 12;
    }
    if (hours === 0) {
      hours = 12;
    }

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${amPm}`;

    console.log(formattedTime);

    if (newComment.trim() === "") return;

    const comment = {
      name: name,
      photo: user.photoURL,
      text: newComment,

      timestamp: formattedTime,
    };

    setComments([...comments, comment]);
    setNewComment("");
  };
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-4 justify-center items-center gap-4">
        <form
          onSubmit={(e) => handleComment(e)}
          className="mt-16 border-2 flex flex-col justify-center items-start m-3 p-4"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <label className="">
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your email</span>
            </label>
            <label className="">
              <input
                type="text"
                name="email"
                placeholder="Enter your Email"
                className="input input-bordered"
              />
            </label>
          </div>
          <label className="label">
            <span className="label-text">Your comments</span>
          </label>

          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            name="commentsValue"
            id="message"
            type="message"
            rows="4"
            className="block p-2.5 w-full text-sm  input-bordered border-2 "
            placeholder="Write your thoughts here..."
          ></textarea>
          <input
            className="mt-6 border-2 px-6 py-2"
            type="submit"
            value="Post your comment"
          />
        </form>
        <div>
          <img
            src="https://media.istockphoto.com/id/496792842/photo/hand-inserting-suggestion-into-suggestion-box.jpg?s=1024x1024&w=is&k=20&c=i3TWxmZgA6z6wv1aX7F3AamUOJWktjRPU98PfZkbgec="
            alt=""
          />
        </div>
      </div>
      <div className="pl-4">
        {comments.map((comment) => (
          <div
            key={comment.timestamp}
            className="flex justify-start  items-start mt-4 gap-2"
          >
            <div>
              <img className=" w-10" src={comment.photo} alt={comment.photo} />
            </div>
            <div>
              <div className=" rounded-2xl pl-2 pr-4 py-1 ">
                <p className="text-sm font-semibold ">{comment.name}</p>
                <p className=" text-sm">{comment.text}</p>
              </div>
              <p className="text-sm text-center">{comment.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comment;
