import React from "react";

 const Newsitem=(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date,source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{ display:`flex`, justifyContent:`flex-end`,position:`absolute`,right:'0'}}>
          <span className=" badge rounded-pill bg-danger" >
                {source}
              </span>
        
          </div>
          <img
            src={
              !imageUrl
                ? "https://image.cnbcfm.com/api/v1/image/107208838-1678858655404-gettyimages-1401628137-vcg111386369946.jpeg?v=1679269651&w=1920&h=1080"
                : imageUrl
            }
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
             
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
