const LinkRect = (props) => {
  return (
    <a
      className='App-link'
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
    >
      { props.text }
    </a>
  );
};

export default LinkRect;
