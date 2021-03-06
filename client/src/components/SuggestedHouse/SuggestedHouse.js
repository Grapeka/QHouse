import classes from "./SuggestedHouse.module.scss";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
import ListedHouse from "../../UI/ListedHouse/ListedHouse";
const Houses = ["h1", "h2", "h3"];
const SuggestedHouse = () => {
  return (
    <div className={classes.SuggestedHouse}>
      <div className={classes.text}>
        <div className={classes.topic}>
          <div className={classes.bigCircle}>
            <div className={classes.smallCircle}>
              <FcHome className={classes.icon} />
            </div>
          </div>
          <span>โครงการแนะนำ</span>
        </div>
        <div className={classes.detail}>
          <div className={classes.textBox}>
            <div className={classes.spacer}></div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              excepturi consectetur mollitia quisquam sit aut veritatis
              voluptatibus numquam delectus.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.house}>
        <div className={classes.box}>
          {Houses.map((e, i) => {
            return <ListedHouse data={e} />;
          })}
        </div>
      </div>
      <div className={classes.buttonBox}>
        <div className={classes.button}>
          <Link
            to="allprojects"
            style={{ color: "black", textDecoration: "none" }}
          >
            ดูโครงการทั้งหมด
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SuggestedHouse;
