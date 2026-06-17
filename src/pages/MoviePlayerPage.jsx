import React, { useState } from "react";
import "./MoviePlayerPage.css";
import Sidebar from "./Sidebar"; // Import Sidebar component
import MovieDetails from "./MovieDetails"; // Import MovieDetails component

const MoviePlayerPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Movie details (can later be replaced with dynamic props/state)
  const movieData = {
    title: "Saturday Night",
    director: "John Doe",
    genre: "Action, Adventure",
    releaseDate: "2024",
    cast: "Kaia Gerber, Gabriel LaBelle, Drew Scheid",
    country: "United States of America",
    production: "Columbia Pictures, Right of Way Films",
    duration: "109 min",
    imdbRating: "7.2",
    description: `At 11:30 PM on October 11, 1975, a ferocious troupe of young comedians and writers changed television forever. This is the story of what happened behind the scenes in the 90 minutes leading up to the first broadcast of Saturday Night Live.`,
    image: "https://example.com/saturday-night-poster.jpg", // Replace with actual image URL
  };
  

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="movie-player-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <header className="header">
        <h1>Unlimited Movies, TV Shows & More</h1>
      </header>

      {/* Movie Player */}
      <div className="player-container">
        <video controls className="movie-player">
          <source src="your-video-source.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Movie Details */}
      <MovieDetails movie={movieData} />

      {/* Comments Section */}
      <div className="comments-section">
        <h3>Comments</h3>
        <div className="comments-input">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          ></textarea>
          <button onClick={handleAddComment}>Submit</button>
        </div>
        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comment">
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p className="no-comments">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviePlayerPage;
