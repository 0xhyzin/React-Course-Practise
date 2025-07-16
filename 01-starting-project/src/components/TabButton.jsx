export const TabeButton = ({ children, onClickHandler, isActive }) => {
  return (
    <li>
      <button
        className={isActive ? "active" : undefined}
        onClick={onClickHandler}
      >
        {children}
      </button>
    </li>
  );
};
