import React from "react";
import { useOutletContext } from "react-router-dom";

const ViewEmail = () => {
  const { openDrawer } = useOutletContext();

  return (
    <div
      style={
        openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }
      }
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      perspiciatis explicabo laborum mollitia, vitae pariatur consectetur ea
      sunt praesentium, facilis quia incidunt id amet quasi deleniti ex numquam
      excepturi, adipisci magni dolor? Placeat sit quisquam perferendis amet
      ipsa. Nulla, consequuntur corporis. Assumenda nisi optio cupiditate
      repudiandae aperiam, ut sequi ipsam, aspernatur, ducimus excepturi
      deleniti quia minus. Consectetur molestias veniam magnam facere aliquam
      repudiandae. Necessitatibus amet ipsum, omnis cumque alias, aspernatur
      laudantium dolore inventore ipsa provident hic! Ratione tenetur aperiam
      quo ducimus assumenda quia sunt officiis, sapiente incidunt eaque
      consequuntur, voluptates ea. Officia sint sequi nulla magnam quos quas
      dolore! Placeat?
    </div>
  );
};

export default ViewEmail;
