function Card(props) {
  const HomeCImages = [
    {
      title: "MT71 (CLOSE LOOP / GEARLESS) INTEGRATED PANEL",
      img: require("../Images/MT71W.png"),
      id: 1,
    },
    {
      title: "MT73 (OPEN LOOP / GEARED) INTEGRATED PANEL",
      img: "",
      id: 2,
    },
    {
      title: "LX 32 AUTODOOR / MANUAL DOOR PANEL",
      img: "",
      id: 3,
    },
    {
      title: "LX 40 AUTO / MANUAL DOOR PANEL",
      img: "",
      id: 4,
    },
    {
      title: "LX-32 HYDRO (HYDRAULIC-CONTROL PANEL)",
      img: "",
      id: 5,
    },
  ];
  return (
    <div>
      {HomeCImages.map((CardData) => (
        <div
          className="card bg-white w-[400px] h-[500px] m-2 rounded-lg shadow-lg"
          key={CardData.id}
        >
          <div className="top bg-white">
            <img
              className="w-[200px] h-[200px] object-cover  p-2"
              src={CardData.img}
              alt="img"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
