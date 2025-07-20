import React from "react";
import "./SlideContent.scss";

export interface MySwiperSlideProps {
  children: React.ReactNode;
  title?: string;
}

export const SlideContent: React.FC<MySwiperSlideProps> = ({
  children,
  title
}) => {
  return (
    <div className={`slide-content`}>
      {title && (
        <div className="title-row">
          <p>{title}</p>
          <p>Giorgos Nikitas</p>
        </div>
      )}
      <div className="content">
        {children}
      </div>
    </div>
  );
};
