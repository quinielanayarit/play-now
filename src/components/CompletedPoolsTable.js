import CompletedPoolRow from "./CompletedPoolRow";

const CompletedPoolsTable = ({ pools, onDelete }) => {
  return (
    <>
      {pools.map((pool,i) => (
        <CompletedPoolRow key={i} pool={pool} onDelete={onDelete} />
      ))}
    </>
  );
};

export default CompletedPoolsTable;
