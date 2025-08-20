import "./css/ShimmerMenu.css";

const ShimmerMenu = () => {
  // simulate 5 shimmer items
  return (
    <div className="shimmer-menu">
      <div className="shimmer-header">
        <div className="shimmer-line title"></div>
        <div className="shimmer-line subtitle"></div>
        <div className="shimmer-line rating"></div>
      </div>

      <ul>
        {[...Array(5)].map((_, i) => (
          <li className="shimmer-item" key={i}>
            <div className="shimmer-details">
              <div className="shimmer-line name"></div>
              <div className="shimmer-line price"></div>
              <div className="shimmer-line desc"></div>
              <div className="shimmer-line desc short"></div>
            </div>
            <div className="shimmer-actions">
              <div className="shimmer-img"></div>
              <div className="shimmer-btn"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShimmerMenu;
