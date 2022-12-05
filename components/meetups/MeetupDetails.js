import classes from './MeetupDetails.module.css';
import Card from '../ui/Card';
const MeetupDetails = ({ title, image, address, description }) => {
  return (
    <Card>
      <div className={classes.image}>
        <img src={image.src} alt={image.alt} />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default MeetupDetails;
