type FilterProps = {
  currentFilter: number;
  onFilterChange: (filter: number) => void;
};

const Filter = ({ currentFilter, onFilterChange }: FilterProps) => {
  const filters = [
    { id: 1, label: "All" },
    { id: 2, label: "Active" },
    { id: 3, label: "Completed" },
  ];

  return (
    <div className="filter">
      {filters.map((filter) => (
        <p
          key={filter.id}
          className={filter.label.toLowerCase()}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </p>
      ))}
    </div>
  );
};

export default Filter;
