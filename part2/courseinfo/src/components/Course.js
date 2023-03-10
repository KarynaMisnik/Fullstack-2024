const Header = ({ heading }) => <h2>{heading}</h2>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part} />);

const Total = ({ parts }) => (
  <b>total of {parts.reduce((a, b) => a + b.exercises, 0)} exercises</b>
);

const Course = ({ courses }) => (
  <div>
    <h1>Web development curriculum</h1>
    {courses.map((course) => (
      <div>
        <Header heading={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    ))}
  </div>
);
export default Course;
