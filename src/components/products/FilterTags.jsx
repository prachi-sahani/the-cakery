import { useProductPageData } from "../../context/index"

export function FilterTags(){
    const { filtersList } = useProductPageData();
    return(
        <div className="filter-tags">
        {filtersList.map((filter, index) => (
          <div key={index} className="filter-tag-item">
            {filter} 
            {/* <i className="material-icons filter-tag-remove">clear</i> */}
          </div>
        ))}
      </div>
    )
}