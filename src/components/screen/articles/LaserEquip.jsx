import EquipSwiper from "../../ui/swipers/EquipSwiper";
import styles from "./LaserEquip.module.sass";

const LaserEquip = () => {
  const equipsList = [
    {
      id: 0,
      img: "/img/equips/equip1.jpg",
    },
    {
      id: 1,
      img: "/img/equips/equip2.jpg",
    },
    {
      id: 2,
      img: "/img/equips/equip1.jpg",
    },
    {
      id: 3,
      img: "/img/equips/equip2.jpg",
    },
    {
      id: 4,
      img: "/img/equips/equip1.jpg",
    },
  ];

  return (
    <>
      <div className={styles.imgWrapper}>
        <img src="/img/articleEquipMain.jpg" alt="Основное оборудование" />
      </div>
      <EquipSwiper equips={equipsList} />
    </>
  );
};

export default LaserEquip;
