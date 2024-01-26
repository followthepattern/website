interface TriangleProperties {
  className?: string;
}

const Triangle = (props: TriangleProperties) => {
  return (
    <svg {...props} viewBox="0 0 100 100">
      <circle cx="0" cy="50" r="50%"/>
    </svg>
  );
};

export default Triangle;
