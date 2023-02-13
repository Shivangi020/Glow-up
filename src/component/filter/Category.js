import React from "react";





const Category = ({type,typeName,action}) => {
  

return (
    <section className="category-main">
      <h4>{typeName}</h4>
      <article className="category-container">
        {type.map((item, index) => {
            const str = item.replace('_',' ')
          return (
            <button className="category-button"   key={index}
            onClick={()=>action(item)}
            >
              {str}
            </button>
          );
        })}
      </article>
    </section>
  );
};

export default Category;
