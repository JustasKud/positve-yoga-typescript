import React from "react";

// Style
import styles from "./CheckedIcon.module.css";

interface CheckedIconProps {
  color: string;
}

const CheckedIcon: React.FC<CheckedIconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={styles.icon}
    >
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckedIcon;
