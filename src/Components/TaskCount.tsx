type TaskCountProps = {
  doneCount: number;
  totalCount: number;
};

const TaskCount = (props: TaskCountProps) => {
  return (
    <div className="circle-container">
      <span className="circle-text">
        {props.doneCount}/{props.totalCount}
      </span>
    </div>
  );
};

export default TaskCount;
