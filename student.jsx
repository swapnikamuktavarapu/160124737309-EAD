function StudentCard(props) {
  return (
    <div>
      <img src={props.image} alt="profile" width="100%" />
      <h3>{props.name}</h3>
      <p>Branch: {props.branch}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default StudentCard;