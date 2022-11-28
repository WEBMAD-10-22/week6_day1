import './person.css';

const Person = (props) => {
  // const { user }  = props
  // name, surname, age

  return (
    <>
      <p>Name: {props.user.name}</p>
      <p>Surname: {props.user.surname}</p>
      <p>Age: {props.user.age}</p>
      <p>Num: {props.num}</p>
    </>
  );
};

export default Person;
