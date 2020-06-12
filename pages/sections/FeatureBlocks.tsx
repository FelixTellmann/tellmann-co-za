import React, { FC } from "react";
import "./FeatureBlocks.scss";

export type FeatureBlocksProps = {
  content?: {
    title: string
    icon: string
    description: string
  }[]
  listStyle?: "ordered" | "unordered"
}

export const FeatureBlocks: FC<FeatureBlocksProps> = ({ content, listStyle }) => {
  
  const listItems = content.map(({ title, icon, description }, i) => {
    let iconType = icon.substr(0, 2).toLowerCase();
    return (
      <li key={i} className="feature__item">
        {title && <h2>title</h2>}
        {icon && React.createElement(iconType === "io"
                                     ? require("react-icons/io")[icon]
                                     : require("react-icons/fa")[icon])}
        {description && <h3 className="feature__description">{description}</h3>}
      </li>
    );
  });
  return (
    <div className="feature">
      {
        listStyle === "ordered"
        ? <ol className="feature__list">{listItems}</ol>
        : <ul className="feature__list">{listItems}</ul>
        
      }
    
    
    </div>
  );
};

export default () => <h1>This is the 404 page</h1>