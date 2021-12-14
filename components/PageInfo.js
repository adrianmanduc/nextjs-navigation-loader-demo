import Navigation from "./Navigation";

export default function PageInfo(props) {
  const { slug, generationDuration, color, type } = props;
  return (
    <div className="page" style={{backgroundColor: color}}>
      <Navigation/>
      <div className="page-content">
        <div className="page-slug">
          <span>Slug: </span>
          {slug}
        </div>
        <div className="page-duration">
          <span>Generation delay: </span>
          {generationDuration}
        </div>
        <div className="page-color">
          <span>Color: </span>
          {color}
        </div>
        <div className="page-type">
          <span>Type: </span>
          {type}
        </div>
      </div>
    </div>
  );
}
  
  