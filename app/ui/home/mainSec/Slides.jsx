

const Slides = ({ ticket }) => {
  return (
    <>
      <div className="relative  w-full h-full bg-base-100 shadow-xl  rounded-xl">
        <figure  className="w-full h-full">
          <img
            src={ticket.imgurl}
            alt={ticket.title}
            className="w-full h-full aspect-video object-cover rounded-xl"
          />
        </figure>
        <div className="card-body absolute bottom-2 text-white w-full">
          <h2 className="card-title">{ticket.title}</h2>
          <p className="truncate">{ticket.description}</p>
        </div>
      </div>
    </>
  );
};

export default Slides;
