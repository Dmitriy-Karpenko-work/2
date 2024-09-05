import "./EventCard.css";

function EventCard({ title, date, location }) {
  return (
    <div className="event-card">
      <h2 className="event-title">{title}</h2>
      <p className="event-date">Дата: {date}</p>
      <p className="event-location">Место: {location}</p>
    </div>
  );
}

export default EventCard;
