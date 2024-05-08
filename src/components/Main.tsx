import React from "react";
import styles from "./Main.module.scss";

interface MainProps {
    test?: boolean;
}

const Main = ({ test }: MainProps) => {
    test = true;

    return (
        <div className={test ? styles.main : ""}>
            <p>testert</p>
        </div>
    );
};

export default Main;
