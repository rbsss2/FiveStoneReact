function MainBusinessItem({ item }) {
  const { imgUrl, title, des } = item;
  const path = process.env.PUBLIC_URL;
  return (
    <li className="businessList">
      <a href="#">
        <div className="mb-wrap">
          <img src={path + imgUrl} alt={title} />
        </div>
        <div className="mb-title">
          <h3>{title}</h3>
          <p>{des}</p>
        </div>
      </a>
    </li>
  );
}

export default MainBusinessItem;
