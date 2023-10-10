import React from "react";

export default function Offcanvas() {

  const navItems = [
    { item: "Home", icon: "" },
    { item: "Explore", icon: "" },
    { item: "Notifications", icon: "" },
    { item: "Messages", icon: "" },
    { item: "Bookmarks", icon: "" },
    { item: "Lists", icon: "" },
    { item: "Profile", icon: "" },
    { item: "More", icon: "" }
]
  return (
    <>
      <button
        className="button-offcanvas" type="button"data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions">
        <img src="https://img.icons8.com/?size=64&id=OTxpMqWbm71F&format=png" className="button-offcanvas__image "/>
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header ">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            <img src="https://img.icons8.com/?size=80&id=K6EbxtNlONPH&format=png"/>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body ">
          {
            navItems.map((cv, index)=>{
              return(
                <p><img src={cv.icon}/>{cv.item}</p>
              )
            })
          }
        </div>
      </div>
    </>
  );
}
