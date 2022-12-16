export default function Box(props) {
  const styles = {
    backgroundColor: props.On ? "green" : "red",
  };

  return (
    <div className="square-box" style={styles} onClick={props.toggle}></div>
  );
}
